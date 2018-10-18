import React from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../route/config';

export default () => {
    const currentPathName = window.location.hash.slice(1);
    return (
        <div className="menu-box">
            <ul>
                {
                    Config.map((configItem) => {
                        const { exact, path, menuName } = configItem;
                        return (
                            <li>
                                <NavLink
                                    exact={exact}
                                    to={path}
                                    replace={currentPathName === path}
                                    activeClassName="link-active"
                                >
                                    {menuName}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};
