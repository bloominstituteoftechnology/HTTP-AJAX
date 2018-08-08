import styled from 'styled-components';
import React, { Component } from 'react';


export default function Friend(props) {
    return (
        <FriendDiv data={props}>
            <h3>{props.data.name}</h3>
            <p>{`Age: ${props.data.age}`}</p>
            <p>{props.data.email}</p>
        </FriendDiv>
    )

}


const FriendDiv = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    width: 250px;
    &:hover{
        opacity: .9;
    }
`;