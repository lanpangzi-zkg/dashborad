import React from 'react';
import { Consumer } from './context';

const LevelThree = () => {
    return (
        <Consumer>
            {
                ({ title }) => {
                    return (<p>{title}</p>);
                }
            }
        </Consumer>
    );
};

export default LevelThree;
