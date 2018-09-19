import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Config from './config';
import Exception from '../component/Exception';

export default () => {
    return (
        <Switch>
            {
                Config.map((routeItem) => {
                    const { path, component, exact = false } = routeItem;
                    return (
                        <Route
                            exact={exact}
                            path={path}
                            key={path}
                            component={component}
                        />
                    );
                })
            }
            <Route component={Exception} /> {/* 404页面 */}
        </Switch>
    );
};
