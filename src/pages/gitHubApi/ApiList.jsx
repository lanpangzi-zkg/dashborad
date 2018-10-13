import React from 'react';
import PropTypes from 'prop-types';
import BaseView from '../../core/BaseView';
import gitHubApiFlow from '../../flow/gitHubApiFlow';
import Connect from '../../core/Connect';

class ApiList extends BaseView {
    componentDidMount() {
        this.props.flow.queryApi('/').then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>ApiList</div>
        );
    }
}

ApiList.propTypes = {
    flow: PropTypes.object,
};

ApiList.defaultProps = {
    flow: {},
};

export default Connect(ApiList, gitHubApiFlow);
