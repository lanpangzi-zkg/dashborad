import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import A from './A';
import B from './B';

const Index = ({ match }) => {
    return (
        <div className="page-box">
            <ul>
                <li>
                    <NavLink
                        to={`${match.url}/a`}
                    >
                        a
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`${match.url}/b`}
                    >
                        b
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${match.url}`} component={A} />
                <Route path={`${match.url}/a`} component={A} />
                <Route path={`${match.url}/b`} component={B} />
            </Switch>
        </div>
    );
};

Index.propTypes = {
    match: PropTypes.object,
};
Index.defaultProps = {
    match: {},
};
