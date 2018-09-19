import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        setTimeout(() => {
            this.setState({
                data: 'Hey there',
            });
        }, 5000);
    }

    render() {
        const { data } = this.state;
        const { render } = this.props;
        if (data === null) {
            return null;
        }
        return (
            <section>
                {render(data)}
            </section>
        );
    }
}

News.propTypes = {
    render: PropTypes.func,
};

News.defaultProps = {
    render: () => {},
};
