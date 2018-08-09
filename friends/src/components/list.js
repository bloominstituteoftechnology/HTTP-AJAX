import styled from 'styled-components';
import React from 'react';
import {Route, Link} from 'react-router-dom';


export default function Friend(props) {
    return <FriendDiv  key={props.data.id} name={props.name} data={props}>
                <p>{props.data.name}</p>
                <p>{`Age: ${props.data.age}`}</p>
                <p>{`Email: ${props.data.email}`}</p>
            </FriendDiv>
}

const FriendDiv = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    width: 300px;
    color: white;
    &:hover{
        opacity: .8;
    }
`;