import React, { Fragment } from 'react';
import styled from 'styled-components';

// styled. 作为styled()的简写方式
// styled()方法将一个react组件包装成一个具有样式的react组件，称之为StyledComponent
const Title1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    text-shadow: 5px 4px 1px #eee;
`;

const Title2 = styled('h2')`
    font-size: 1em;
    text-align: center;
    color: palevioletred;
    text-shadow: 5px 4px 1px #eee;
`;

// 继承&重写
const Title3 = styled(Title1)`
    font-size: 0.85em;
`;
// 继承&重写
const Title4 = Title1.extend`
    font-size: 0.85em;
`;

// 接收props属性
const Title5 = styled(Title1)`
    font-size: ${(props) => { return props.fontSize; }};
`;

export default () => {
    return (
        <Fragment>
            <Title1>Hello</Title1>
            <Title2>Hello</Title2>
            <Title3>Hello</Title3>
            <Title4>Hello</Title4>
            <Title5 fontSize="0.75em">Hello</Title5>
        </Fragment>
    );
};
