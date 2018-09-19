/* eslint-disable */
const Dispatcher = function() {
    return {
        dispatch: function(action) {
            this.stores.forEach(({ store, change}) => {
                store.update(action, change);
            });
        },
        stores: [],
        register: function(store) {
            if (!store || !store.update) {
                throw new TypeError('you should provide a store that has an update method');
            }
            // 视图层中store的消费者
            const consumers = [];
            // store update之后的回调函数
            const change = (newStore) => {
                consumers.forEach((entry) => {
                    entry(newStore);
                });
            };
            this.stores.push({store, change});
            // 返回订阅API
            return (consumer, noInit) => {
                consumers.push(consumer);
                if (!noInit) {
                    consumer(store);
                }
            };
        },
    };
};

export default {
    create: () => {
        const dispatcher = Dispatcher();
        return {
            dispatch: function(action) {
                dispatcher.dispatch(action);
            },
            createSubscriber: function(store) {
                return dispatcher.register(store);
            }
        };
    },
};
