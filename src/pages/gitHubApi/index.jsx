import React from 'react';
import { Provider } from 'react-redux';
import BaseView from '../../core/BaseView';
import Store from '../../core/Store';
import ApiList from './ApiList';

export default class Index extends BaseView {
    render() {
        return (
            <Provider store={Store}>
                <ApiList />
            </Provider>
        );
    }
}
