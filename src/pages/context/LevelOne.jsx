import React from 'react';
import PropsTypes from 'prop-types';
import Wire from './wire';

const LevelOne = ({ title }) => {
    return (
        <div>{title}</div>
    );
};

LevelOne.propTypes = {
    title: PropsTypes.string,
};
LevelOne.defaultProps = {
    title: '1',
};

export default Wire(LevelOne, ['title'], (title) => {
    return { title };
});
