import React from 'react';
import PropsTypes from 'prop-types';

const LevelTwo = (props, context) => {
    const { get } = context;
    return (
        <div>
            {
                get('title')
            }
        </div>
    );
};

LevelTwo.contextTypes = {
    data: PropsTypes.object,
    get: PropsTypes.func,
    register: PropsTypes.func,
};

export default LevelTwo;
