import React from 'react';
import PropsTypes from 'prop-types';

export default (component, dependencies = [], mapper) => {
    const Wire = (props, context) => {
        const { get } = context;
        const dependenciesArr = dependencies.map(get.bind(context));
        const newProps = Object.assign({}, props, mapper(...dependenciesArr));
        return React.createElement(component, newProps);
    };
    Wire.contextTypes = {
        data: PropsTypes.object,
        get: PropsTypes.func,
        register: PropsTypes.func,
    };
    return Wire;
};
