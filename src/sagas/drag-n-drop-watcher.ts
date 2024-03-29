import { takeEvery, put, select } from 'redux-saga/effects';
import { getPoints, getRouter } from './selectors';
import { IAdress, IUpdatedAction } from '../typings';
import { getIndex, getBeforeIdxArray, updateMapReferencePoints, getArrAfterDelete, getAfterIdxArray } from '../utils';

// saves draggin item id in dataTransfer obj
const onDragStartHandler = (id: number, evt: React.DragEvent): void => {
    if (evt.dataTransfer) {
        evt.dataTransfer.effectAllowed='move';
        evt.dataTransfer.setData('dragContent', JSON.stringify({ id }));
    }
};

// takes dragging item from points arr, removes it and returns new array with right order
const onDropHandler = (id: number, evt: React.DragEvent, points: IAdress[]): IAdress[] => {
    const draggingItemId = JSON.parse(evt.dataTransfer.getData('dragContent')).id;
    const target = (evt.target as HTMLElement);
    // whatever style has been set by dragover, needs to be reset
    target.style.cssText = '';
    // if item dragged on it self, then no need to change anything
    if (id === draggingItemId) {
        return [];
    }
    const bounds = (target.getBoundingClientRect() as DOMRect);
    const offset = bounds.y + bounds.height / 2;
    const cutPoints = getArrAfterDelete(draggingItemId, points);
    const draggingItemIdx = getIndex(points, draggingItemId);
    const dropabbleItemIdx = getIndex(cutPoints, id);
    
    // if cursor is lower then center of list item, then dragging item should be appended before
    if (evt.clientY - offset > 0) {
        return [
            ...getBeforeIdxArray(cutPoints, dropabbleItemIdx + 1),
            {...points[draggingItemIdx]},
            ...getAfterIdxArray(cutPoints, dropabbleItemIdx)
        ];
    } else {
        return [
            ...getBeforeIdxArray(cutPoints, dropabbleItemIdx),
            {...points[draggingItemIdx]},
            ...cutPoints.slice(dropabbleItemIdx)
        ];
    }
};

function* onDrag({ payload: { id, evt } }: IUpdatedAction): IterableIterator<any> {
    yield onDragStartHandler(id, evt);
};

function* onDrop({ payload: { id, evt } }: IUpdatedAction): IterableIterator<any> {
    const points = yield select(getPoints);
    const router = yield select(getRouter);
    const updatedPoints: IAdress[] = yield onDropHandler(id, evt, points);
    if (updatedPoints.length) {
        yield put({
            type: 'MAP_POINTS_LIST_UPDATED',
            payload: updatedPoints
        });
        yield updateMapReferencePoints(router, updatedPoints);
    }
}; 

export function* watchDragNDrop (): IterableIterator<any> {
    yield takeEvery('DRAGGING_LIST_ITEM', onDrag);
    yield takeEvery('LIST_ITEM_DROPPED', onDrop);
};