import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    const currentPathName = window.location.hash.slice(1);
    return (
        <div className="menu-box">
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        replace={currentPathName === '/'}
                        activeClassName="link-active"
                    >
                        {'home'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/one"
                        replace={currentPathName === '/one'}
                        activeClassName="link-active"
                    >
                        {'one'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/children"
                        exact
                        replace={currentPathName === '/children'}
                        activeClassName="link-active"
                    >
                        {'children'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dataFlow"
                        exact
                        replace={currentPathName === '/dataFlow'}
                        activeClassName="link-active"
                    >
                        {'dataFlow'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/redux"
                        exact
                        replace={currentPathName === '/redux'}
                        activeClassName="link-active"
                    >
                        {'redux'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/context"
                        exact
                        replace={currentPathName === '/context'}
                        activeClassName="link-active"
                    >
                        {'context'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/importTest"
                        exact
                        replace={currentPathName === '/importTest'}
                        activeClassName="link-active"
                    >
                        {'importTest'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/styledComponent"
                        exact
                        replace={currentPathName === '/styledComponent'}
                        activeClassName="link-active"
                    >
                        {'tyledComponent'}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
