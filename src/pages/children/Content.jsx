import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
    return (
        <div>
            <span>this is content</span>
            {children}
        </div>
    );
};

Content.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Content.defaultProps = {
    children: {},
};


export default Content;
