import React from 'react';
import Main from './Main';
import Content from './Content';
import Article from './Article';
import News from './News';
import DataProvider from './DataProvider';

export default () => {
    const user = {
        name: 'zz',
        age: 20,
    };
    return (
        <div className="page-box">
            <Main>
                <Content>
                    <Article>{user}</Article>
                    <News />
                </Content>
                <DataProvider
                    render={(data) => {
                        return (<p>{data}</p>);
                    }}
                />
            </Main>
        </div>
    );
};
