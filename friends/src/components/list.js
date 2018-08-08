import styled from 'styled-components';
import React from 'react';

export default function Friend(props) {
    return (
        <FriendDiv  key={props.data.id} name={props.name} data={props}>
            <img/>
                <p>{props.data.name}</p>
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