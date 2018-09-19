import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import VisibleToggle from './VisibleToggle';
import Reducers from './reducers';

export default () => {
    return (
        <Provider store={createStore(combineReducers(Reducers))}>
            <div>
                <Counter />
                <VisibleToggle />
            </div>
        </Provider>
    );
};
