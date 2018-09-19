const store = {};
const reducer = (action, change) => {
    const { type } = action;
    switch (type) {
        case 'add':
            store.count = (store.count || 0) + 1;
            break;
        default:
            break;
    }
    change(store);
};

export default {
    update: (action, change) => {
        reducer(action, change);
    },
};

const createStore = (initialStore = {}) => {
    Object.assign(store, initialStore);
};
export {
    createStore,
};
