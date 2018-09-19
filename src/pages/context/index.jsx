import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import NewApi from './NewApi';
import dependencies from './dependencies';

dependencies.register('title', 'hahaha');

class Context extends Component {
    getChildContext() {
        return dependencies;
    }

    render() {
        return (
            <div className="context-box">
                <LevelOne />
                <LevelTwo />
                <NewApi />
            </div>
        );
    }
}
Context.childContextTypes = {
    data: PropsTypes.object,
    get: PropsTypes.func,
    register: PropsTypes.func,
};

export default Context;
