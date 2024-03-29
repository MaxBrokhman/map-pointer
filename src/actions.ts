import { IUpdatedAction } from './typings';

export const mapPointSelected = (coords: number[]): IUpdatedAction => {
    return {
        type: 'MAP_POINT_SELECTED',
        payload: coords
    }
};

export const onNameInput = (name: string): IUpdatedAction => {
    return {
        type: 'ON_NAME_INPUT',
        payload: name
    }
};

export const newPointAdded = (name: string): IUpdatedAction => {
    return {
        type: 'NEW_POINT_ADDED',
        payload: name
    }
};

export const onAppLoaded = (): IUpdatedAction => {
    return {
        type: 'APP_LOADED'
    }
};

export const deleteItem = (id: number): IUpdatedAction => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
};

export const editPointItem = (id: number): IUpdatedAction => {
    return {
        type: 'EDIT_POINT_ITEM',
        payload: id
    }
};

export const editingPointName = (name: string): IUpdatedAction => {
    return {
        type: 'EDIT_POINT_NAME',
        payload: name
    }
};

export const pointUpdated = (id: number, prop: string | boolean): IUpdatedAction => {
    return {
        type: 'POINT_UPDATED',
        payload: {
            prop,
            id
        }
    }
};

export const draggingListItem = (id: number, evt: React.MouseEvent): IUpdatedAction => {
    return {
        type: 'DRAGGING_LIST_ITEM',
        payload: {
            id,
            evt
        }
    }
};

export const listItemDropped = (id: number, evt: React.DragEvent): IUpdatedAction => {
    return {
        type: 'LIST_ITEM_DROPPED',
        payload: {
            id,
            evt
        }
    }
};
