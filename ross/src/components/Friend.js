import React, { Component } from 'react';
import styled from 'styled-components';

const Ross = styled.div`
    width: 400px;
    height:222px;
    margin:2% 0;
    box-shadow: 1px 0px 5px #000;
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