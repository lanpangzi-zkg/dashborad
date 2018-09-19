import React from 'react';
import { Provider } from './context';
import LevelThree from './LevelThree';

const NewApi = () => {
    return (
        <Provider value={{ title: 'aaaaa' }}>
            <LevelThree />
        </Provider>
    );
};

export default NewApi;
