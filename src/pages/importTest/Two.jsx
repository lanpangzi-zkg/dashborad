import React from 'react';
import { getData } from './config';

export default () => {
    return (
        <p>{getData('name')}</p>
    );
};
