import React from 'react';
import { connect } from 'react-redux';

export default (View, Flow) => {
    const flow = new Flow();
    const viewKey = flow.getKey();
    return (...props) => {
        return connect((state) => {
            return Object.assign(state[viewKey]);
        }, (dispatch) => {
            flow.dispatcher = dispatch;
        })(() => { return <View {...props} flow={flow} />; });
    };
};
