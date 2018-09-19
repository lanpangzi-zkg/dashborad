import React from 'react';
import One from './One';
import Two from './Two';
import { register } from './config';

export default () => {
    register('age', 20);
    return (
        <div>
            <One />
            <Two />
        </div>
    );
};
