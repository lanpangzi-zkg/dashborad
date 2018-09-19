import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NewsList = ({ children, list }) => {
    return (
        <Fragment>
            {
                list.map((item, index) => {
                    return children(item, index);
                })
            }
        </Fragment>
    );
};

NewsList.propTypes = {
    children: PropTypes.func,
    list: PropTypes.string,
};
NewsList.defaultProps = {
    children: () => {},
    list: [],
};
