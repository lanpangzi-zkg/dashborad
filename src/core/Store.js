import { createStore } from 'redux';

const reducer = (state = {}, action) => {
    // let { treeData } = appStore;
    const { type, payload = {} } = action;
    const { viewKey } = payload;
    // redux 初始化
    if (type.indexOf('@@INIT') >= 0) {
        return state;
    }
    const newData = Object.assign({}, payload);
    delete newData.viewKey;
    // 视图对应的数据对象
    let viewStore = state[viewKey] || (state[viewKey] = {});
    viewStore = Object.assign(viewStore, newData);
    return Object.assign({}, state, { [viewKey]: viewStore });
};

/* eslint-disable no-underscore-dangle */
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
