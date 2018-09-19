import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAddAction, createSubtractAction } from './actionCreators';

const Counter = ({
    count, visible, handleAdd, handleSubtract,
}) => {
    if (visible) {
        return (
            <div>
                <p>{count}</p>
                <input type="button" value="add" onClick={handleAdd} />
                <input type="button" value="subtract" onClick={handleSubtract} />
            </div>
        );
    }
    return null;
};

Counter.propTypes = {
    count: PropTypes.number,
    visible: PropTypes.bool,
    handleAdd: PropTypes.func,
    handleSubtract: PropTypes.func,
};
Counter.defaultProps = {
    count: 0,
    visible: true,
    handleAdd: () => {},
    handleSubtract: () => {},
};

const mapStateToProps = (state) => {
    const { count, visible } = state;
    return Object.assign(count, visible);
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: () => {
            dispatch(createAddAction());
        },
        handleSubtract: () => {
            dispatch(createSubtractAction());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
