(window["webpackJsonpmap-pointer"]=window["webpackJsonpmap-pointer"]||[]).push([[0],{33:function(e,t,n){e.exports=n(52)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(14),c=n.n(o),u=n(12),i=n(23),s=n(8),p=n(20),l=n(11);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m={points:[],newPlacesCoords:[0,0],newPointName:"",error:!1,loading:!0,map:null,router:null},b=n(24),O=n.n(b),y=n(25),v=n(30),g=n(4),E=n.n(g),j=n(7),D=n(5),P=function(e){return e.map},x=function(e){return e.points},w=function(e){return e.router},h=function(e){return e.map(function(e){return e.coords})},T=function(e,t){return e.findIndex(function(e){return e.id===t})},I=function(e,t){return function(n){var r=n.target.value;null!==t&&void 0!==t?e(r,t):e(r)}},N=n(26),_=function(){var e=Object(N.a)(E.a.mark(function e(t,n){var r,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return new Promise(function(e){t.model.events.add("requestsuccess",function(){e(t.getWayPoints())})})},a=h(n),t.model.setReferencePoints(a),e.prev=3,e.next=6,r();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0.message);case 11:n.length&&t.getWayPoints().each(function(e,t){var r=n[t].name;e.properties.set("index",t),e.properties.set("coordinates",n[t].coords),e.geometry.setCoordinates(n[t].coords),e.options.set({preset:"islands#grayStretchyIcon",iconContentLayout:ymaps.templateLayoutFactory.createClass("".concat(r))})});case 12:case"end":return e.stop()}},e,null,[[3,8]])}));return function(t,n){return e.apply(this,arguments)}}(),S=function(e,t){return t<0?[]:e.slice(0,t)},A=function(e,t){return t+1>=e.length?[]:e.slice(t+1)},k=function(e,t,n){return[].concat(Object(j.a)(S(e,n)),[t],Object(j.a)(A(e,n)))},L=function(e,t){var n=T(t,e);return[].concat(Object(j.a)(S(t,n)),Object(j.a)(A(t,n)))},M=E.a.mark(U),C=E.a.mark(B),R=function(e,t){return{name:e,coords:t,id:(new Date).getTime(),isEditing:!1}},G=function(e,t){return[].concat(Object(j.a)(t),[e])};function U(e){var t,n,r,a,o,c,u;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.next=3,Object(D.b)(P);case 3:return n=i.sent,i.next=6,Object(D.b)(w);case 6:return r=i.sent,i.next=9,n.getCenter();case 9:return a=i.sent,i.next=12,R(t,a);case 12:return o=i.sent,i.next=15,Object(D.b)(x);case 15:return c=i.sent,i.next=18,G(o,c);case 18:return u=i.sent,i.next=21,Object(D.a)({type:"NEW_LIST_POINT_ADDED",payload:u});case 21:return i.next=23,_(r,u);case 23:case"end":return i.stop()}},M)}function B(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("NEW_POINT_ADDED",U);case 2:case"end":return e.stop()}},C)}var F=function(e,t){return new Promise(function(n){ymaps.ready().then(function(){var r=new ymaps.Map("map",{center:[55.76,37.64],zoom:7}),a=function(e,t,n){var r=h(t),a=new ymaps.multiRouter.MultiRoute({referencePoints:r},{boundsAutoApply:!0,editorDrawOver:!1,editorMidPointsType:"way"});a.editor.start(),e.geoObjects.add(a),e.container.fitToViewport();var o=a.getWayPoints().events,c=function e(t){var r=t.get("target"),a=r.properties.get("index");n({type:"POINT_DRAGGED",payload:{coords:r.geometry.getCoordinates(),idx:a}}),o.remove("dragend",e)};return o.add("dragstart",function(){o.add("dragend",c)}),a}(r,e,t);n({map:r,router:a})})})},W=function(e){return E.a.mark(function t(){var n,r,a,o;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.b)(x);case 2:return n=t.sent,t.next=5,F(n,e);case 5:if(r=t.sent,a=r.map,o=r.router,!n.length){t.next=11;break}return t.next=11,_(o,n);case 11:return t.next=13,Object(D.a)({type:"MAP_LOADED",payload:{map:a,router:o}});case 13:case"end":return t.stop()}},t)})},J=E.a.mark(H),q=E.a.mark(K);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=function(e,t,n){var r=n[t];return"string"===typeof e?z({},r,{name:e}):"boolean"===typeof e?z({},r,{isEditing:!r.isEditing}):r};function H(e){var t,n,r,a,o,c,u,i;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.prop,r=t.id,s.next=3,Object(D.b)(x);case 3:return a=s.sent,s.next=6,Object(D.b)(w);case 6:return o=s.sent,s.next=9,T(a,r);case 9:return c=s.sent,s.next=12,V(n,c,a);case 12:return u=s.sent,s.next=15,k(a,u,c);case 15:return i=s.sent,s.next=18,Object(D.a)({type:"MAP_POINTS_LIST_UPDATED",payload:i});case 18:if("string"!==typeof n){s.next=21;break}return s.next=21,_(o,i);case 21:case"end":return s.stop()}},J)}function K(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("POINT_UPDATED",H);case 2:case"end":return e.stop()}},q)}var Q=E.a.mark(Z),X=E.a.mark($);function Z(e){var t,n,r,a;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.next=3,Object(D.b)(x);case 3:return n=o.sent,o.next=6,Object(D.b)(w);case 6:return r=o.sent,o.next=9,L(t,n);case 9:return a=o.sent,o.next=12,Object(D.a)({type:"MAP_POINTS_LIST_UPDATED",payload:a});case 12:return o.next=14,_(r,a);case 14:case"end":return o.stop()}},Q)}function $(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("DELETE_ITEM",Z);case 2:case"end":return e.stop()}},X)}var ee=E.a.mark(ae),te=E.a.mark(oe);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var re=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{coords:t})};function ae(e){var t,n,r,a,o,c,u;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.idx,r=t.coords,i.next=3,Object(D.b)(x);case 3:return a=i.sent,i.next=6,re(a[n],r);case 6:return o=i.sent,i.next=9,k(a,o,n);case 9:return c=i.sent,i.next=12,Object(D.b)(w);case 12:return u=i.sent,i.next=15,Object(D.a)({type:"MAP_POINTS_LIST_UPDATED",payload:c});case 15:return i.next=17,_(u,c);case 17:case"end":return i.stop()}},ee)}function oe(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("POINT_DRAGGED",ae);case 2:case"end":return e.stop()}},te)}var ce=E.a.mark(de),ue=E.a.mark(me),ie=E.a.mark(be);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var le=function(e,t){t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("dragContent",JSON.stringify({id:e})))},fe=function(e,t,n){var r=JSON.parse(t.dataTransfer.getData("dragContent")).id;if(e===r)return[];var a=t.target,o=a.getBoundingClientRect(),c=o.y+o.height/2,u=L(r,n),i=T(n,r),s=T(u,e);return a.style.cssText="",t.clientY-c>0?[].concat(Object(j.a)(S(u,s+1)),[pe({},n[i])],Object(j.a)(A(u,s))):[].concat(Object(j.a)(S(u,s)),[pe({},n[i])],Object(j.a)(u.slice(s)))};function de(e){var t,n,r;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.id,r=t.evt,a.next=3,le(n,r);case 3:case"end":return a.stop()}},ce)}function me(e){var t,n,r,a,o,c;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.id,r=t.evt,u.next=3,Object(D.b)(x);case 3:return a=u.sent,u.next=6,Object(D.b)(w);case 6:return o=u.sent,u.next=9,fe(n,r,a);case 9:if(!(c=u.sent).length){u.next=15;break}return u.next=13,Object(D.a)({type:"MAP_POINTS_LIST_UPDATED",payload:c});case 13:return u.next=15,_(o,c);case 15:case"end":return u.stop()}},ue)}function be(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)("DRAGGING_LIST_ITEM",de);case 2:return e.next=4,Object(D.c)("LIST_ITEM_DROPPED",me);case 4:case"end":return e.stop()}},ie)}var Oe,ye={key:"root",storage:O.a,stateReconciler:y.a,blacklist:["map","loading","error","router"]},ve=Object(p.a)(ye,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAP_LOADED":var n=t.payload,r=n.map,a=n.router;return d({},e,{error:!1,loading:!1,map:r,router:a});case"ON_NAME_INPUT":return d({},e,{newPointName:t.payload});case"NEW_LIST_POINT_ADDED":return d({},e,{points:t.payload,newPointName:""});case"MAP_POINTS_LIST_UPDATED":return d({},e,{points:t.payload});default:return e}}),ge=Object(v.a)(),Ee=Object(s.e)(ve,Object(s.a)(ge)),je=Object(p.b)(Ee);ge.run((Oe=Ee.dispatch,E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.e)("APP_LOADED",W(Oe));case 2:case"end":return e.stop()}},e)}))),ge.run(B),ge.run(K),ge.run($),ge.run(oe),ge.run(be);var De=n(27),Pe=n(28),xe=n(32),we=n(29),he=n(31),Te=function(e,t){return{type:"POINT_UPDATED",payload:{prop:t,id:e}}},Ie=(n(46),function(e){var t=e.name,n=e.onDelete,r=e.id,o=e.onEdit,c=e.onDragStart,u=e.onDrop,i=e.onDragOver,s=e.onDragLeave;return a.a.createElement("li",{className:"list-group-item points-list-item",onDragStart:c,onDrop:u,onDragOver:i,onDragLeave:s,draggable:!0},t,a.a.createElement("button",{type:"button",className:"btn btn-outline-danger float-right list-item-btn",onClick:function(){return n(r)}},a.a.createElement("i",{className:"fa fa-trash"})),a.a.createElement("button",{type:"button",className:"btn btn-outline-secondary float-right list-item-btn",onClick:function(){return o(r)}},a.a.createElement("i",{className:"fa fa-edit"})))}),Ne=(n(47),function(e){var t=e.name,n=e.onInput,r=e.onFormSubmit,o=e.btnLabel;return a.a.createElement("form",{className:"input-group name-input-form",onSubmit:function(e){e.preventDefault(),r(t)}},a.a.createElement("input",{type:"text",value:t,className:"form-control name-input",placeholder:"name your point","aria-label":"name for point on a map",onChange:I(n),required:!0}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},o)))}),_e=Object(u.b)(null,function(e){return{onDelete:function(t){return e(function(e){return{type:"DELETE_ITEM",payload:e}}(t))},onInput:function(t,n){return e(Te(t,n))},onFormSubmit:function(t){return e(Te(t,!0))},onEdit:function(t){return e(Te(t,!0))},onItemDrag:function(t,n){return e(function(e,t){return{type:"DRAGGING_LIST_ITEM",payload:{id:e,evt:t}}}(t,n))},onItemDrop:function(t,n){return e(function(e,t){return{type:"LIST_ITEM_DROPPED",payload:{id:e,evt:t}}}(t,n))}}})(function(e){var t=e.name,n=e.id,r=e.onDelete,o=e.isEditing,c=e.onInput,u=e.onFormSubmit,i=e.onEdit,s=e.onItemDrag,p=e.onItemDrop;if(o){return a.a.createElement(Ne,{name:t,btnLabel:"Submit",onInput:function(e){return function(t){return c(e,t)}}(n),onFormSubmit:function(e){return function(){return u(e)}}(n)})}return a.a.createElement(Ie,{name:t,id:n,onDelete:r,onEdit:i,onDragStart:function(e){s(n,e)},onDrop:function(e){return p(n,e)},onDragOver:function(e){e.preventDefault();var t=e.target,n=t.getBoundingClientRect(),r=n.y+n.height/2;e.clientY-r>0?(t.style.borderBottom="solid #80bdff 0.2rem",t.style.borderTop=""):(t.style.borderTop="solid #80bdff 0.2rem",t.style.borderBottom="")},onDragLeave:function(e){e.target.style.cssText=""}})}),Se=(n(48),Object(u.b)(function(e){return{points:e.points}})(function(e){return a.a.createElement("ul",{className:"list-group"},e.points.map(function(e){var t=e.name,n=e.id,r=e.isEditing;return a.a.createElement(_e,{name:t,key:n,id:n,isEditing:r})}))})),Ae=(n(49),function(){return a.a.createElement("div",{className:"map",id:"map"})}),ke=(n(50),function(){return a.a.createElement("div",{className:"lds-css ng-scope"},a.a.createElement("div",{className:"lds-spinner"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))}),Le=(n(51),function(e){function t(e){var n;return Object(De.a)(this,t),(n=Object(xe.a)(this,Object(we.a)(t).call(this,e))).props=void 0,n.inputBtnLabel=void 0,n.props=e,n.inputBtnLabel="AddPoint",n}return Object(he.a)(t,e),Object(Pe.a)(t,[{key:"componentDidMount",value:function(){this.props.onAppLoaded()}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.onInput,r=e.onFormSubmit,o=e.loading;return a.a.createElement("div",{className:"container d-flex align-items-stretch app-container"},a.a.createElement("div",{className:"d-flex flex-column flex-grow-1 left-container"},a.a.createElement(Ne,{btnLabel:this.inputBtnLabel,name:t,onInput:n,onFormSubmit:r}),a.a.createElement(Se,null)),a.a.createElement("div",{className:"d-flex flex-column flex-grow-1"},a.a.createElement(Ae,null)),o&&a.a.createElement(ke,null))}}]),t}(a.a.Component)),Me=Object(u.b)(function(e){return{loading:e.loading,error:e.error,name:e.newPointName}},function(e){return{onAppLoaded:function(){return e({type:"APP_LOADED"})},onInput:function(t){return e(function(e){return{type:"ON_NAME_INPUT",payload:e}}(t))},onFormSubmit:function(t){return e(function(e){return{type:"NEW_POINT_ADDED",payload:e}}(t))}}})(Le);c.a.render(a.a.createElement(u.a,{store:Ee},a.a.createElement(i.a,{persistor:je},a.a.createElement(Me,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.95cdf3a5.chunk.js.map