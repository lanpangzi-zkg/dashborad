import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children, title }) => {
    return (
        <div className="c-box">
            <p>{title}</p>
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    title: PropTypes.string,
};
Main.defaultProps = {
    children: {},
    title: 'aaa',
};

export default Main;
