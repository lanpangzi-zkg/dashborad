import React from 'react';
import Dispatcher from './Dispatcher';

const { createSubscriber, dispatch } = Dispatcher.create();

const connect = (Com, store, consumer) => {
    return class Wrapper extends React.Component {
        constructor(props) {
            super(props);
            this.handleStoreChange = this.handleStoreChange.bind(this);
            const counterStoreSubscriber = createSubscriber(store);
            counterStoreSubscriber(this.handleStoreChange);
        }

        componentDidMount() {
            this.isMount = true;
        }

        componentWillUnmount() {
            this.isMount = false;
        }

        handleStoreChange(newStore) {
            if (this.isMount) {
                this.setState(Object.assign(this.state || {}, consumer(newStore)));
            }
        }

        render() {
            return <Com {...this.state} dispatch={dispatch} />;
        }
    };
};

export default connect;
