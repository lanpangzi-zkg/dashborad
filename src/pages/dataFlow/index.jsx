import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Store from './Store';
import connect from './Connect';

class DataFlow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { dispatch } = this.props;
        dispatch({
            type: 'add',
        });
    }

    render() {
        const { count } = this.props;
        return (
            <div>
                <button
                    type="button"
                    onClick={this.handleClick}
                >
                    add
                </button>
                <p>{ count || 0 }</p>
            </div>
        );
    }
}

DataFlow.propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.number,
};

DataFlow.defaultProps = {
    dispatch: () => {},
    count: 0,
};

export default connect(DataFlow, Store, (store = {}) => {
    return {
        count: store.count,
    };
});
