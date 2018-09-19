import React, { Component } from 'react';
import NewsList from './NewsList';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    index: 0,
                    title: 'a1',
                }, {
                    index: 1,
                    title: 'a2',
                }, {
                    index: 2,
                    title: 'a3',
                },
            ],
        };
    }

    render() {
        const { list } = this.state;
        return (
            <div className="news-box">
                <NewsList list={list}>
                    {
                        (item, index) => {
                            if (item.index > 0) {
                                return (<p key={`${index}-item`}>{item.title}</p>);
                            }
                            return null;
                        }
                    }
                </NewsList>
            </div>
        );
    }
}
