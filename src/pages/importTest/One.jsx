import React from 'react';
import { register, getData } from './config';

export default () => {
    register('name', 'xq');
    return (
        <p>{getData('age')}</p>
    );
};
