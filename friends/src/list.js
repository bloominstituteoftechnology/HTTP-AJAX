import styled from 'styled-components';
import React from 'react';


export default function Friend(props) {
    return (
        <FriendDiv key={props.data.id} data={props}>
            <h3>{props.data.name}</h3>
            <p>{`Age: ${props.data.age}`}</p>
            <p>{`Email: ${props.data.email}`}</p>
        </FriendDiv>
    )

}


const FriendDiv = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    width: 300px;
    &:hover{
        opacity: .8;
    }
`;