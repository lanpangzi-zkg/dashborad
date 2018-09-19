import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ children }) => {
    return (
        <p>{`${children.name} ${children.age}`}</p>
    );
};

Article.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Article.defaultProps = {
    children: {},
};
export default Article;
