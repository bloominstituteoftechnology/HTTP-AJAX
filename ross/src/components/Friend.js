import React, { Component } from 'react';
import styled from 'styled-components';

const Ross = styled.div`
    width: 620px;
    height:222px;
    margin:2% 0;
    box-shadow: 1px 0px 435px #292929;
    color:#252525;
    font-display:sans-serif;
    font-size:15rem;
    line-height:0.4;
    overflow:hidden;
    text-align:center;
`;

const Friend = (props) => {

    console.log(props);
    

    return (
        <Ross>
            <div>{props.ross.name}</div>
            <div>{props.ross.age}</div>
            <div>{props.ross.email}</div>
        </Ross>
    )
}

export default Friend;