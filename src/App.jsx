import React from 'react';
import AppRoute from './route';
import Menu from './component/Menu';
import './static/style/common.css';

export default () => {
    return (
        <div className="main-box">
            <Menu />
            <div className="content-box">
                <AppRoute />
            </div>
        </div>
    );
};
