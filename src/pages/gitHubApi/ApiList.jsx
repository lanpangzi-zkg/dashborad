import React from 'react';
import PropTypes from 'prop-types';
import BaseView from '../../core/BaseView';
import gitHubApiFlow from '../../flow/gitHubApiFlow';
import Connect from '../../core/Connect';

class ApiList extends BaseView {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        this.props.flow.queryApi();
    }

    handleAdd() {
        const { count = 0 } = this.props;
        const newCount = count + 1;
        this.props.flow.addCount(newCount);
    }

    render() {
        const { apiData = {} } = this.props;
        return (
            <div>
                <p>ApiList</p>
                <a
                    onClick={this.handleAdd}
                    style={{
                        backgroundColor: '#adadaa',
                        cursor: 'pointer',
                        padding: '0 5px',
                    }}
                >add</a>
                <span>{this.props.count || 0}</span>
                <ul>
                    {
                        Object.keys(apiData).map((key) => {
                            return (
                                <li>
                                    <span>{key}</span>
                                    <span>{apiData[key]}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
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
