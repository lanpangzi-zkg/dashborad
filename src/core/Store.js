import { createStore } from 'redux';

const appStore = {
    treeData: {},
};

const reducer = (state = {}, action) => {
    let { treeData } = appStore;
    const { type, payload = {} } = action;
    const { viewKey } = payload;
    // redux 初始化
    if (type.indexOf('@@redux/INIT')) {
        return {};
    }
    const newData = Object.assign({}, payload);
    delete newData.viewKey;
    // 视图对应的数据对象
    let viewStore = treeData[viewKey] || (treeData[viewKey] = {});
    viewStore = Object.assign(viewStore, newData);
    const newStore = Object.assign(state, treeData, { [viewKey]: viewStore });
    treeData = newStore;
    return newStore;
};

export default createStore(reducer);
