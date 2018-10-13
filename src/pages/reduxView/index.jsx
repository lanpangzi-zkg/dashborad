import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import VisibleToggle from './VisibleToggle';
import Reducers from './reducers';

export default () => {
    return (
        /* eslint-disable no-underscore-dangle */
        <Provider store={createStore(combineReducers(Reducers),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
        >
            <div>
                <Counter />
                <VisibleToggle />
            </div>
        </Provider>
        /* eslint-enable */
    );
};
