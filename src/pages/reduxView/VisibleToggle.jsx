import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createShowAction, createHiddenAction } from './actionCreators';

const VisibleToggle = ({ handleShow, handleHidden }) => {
    return (
        <div>
            <input type="button" onClick={handleShow} value="show" />
            <input type="button" onClick={handleHidden} value="hidden" />
        </div>
    );
};

VisibleToggle.propTypes = {
    handleShow: PropTypes.func,
    handleHidden: PropTypes.func,
};

VisibleToggle.defaultProps = {
    handleShow: () => {},
    handleHidden: () => { },
};

// 选择感兴趣的数据，后面将作为props传递到组件中去
const mapStateToProps = (state) => {
    return state.visible;
};

// 感兴趣的方法，后面将作为props传递到组件中去
const mapDispatchToProps = (dispatch) => {
    return {
        handleShow: () => {
            dispatch(createShowAction());
        },
        handleHidden: () => {
            dispatch(createHiddenAction());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(VisibleToggle);
