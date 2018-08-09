import styled from 'styled-components';
import React from 'react';
// import {Route, Link} from 'react-router-dom';


export default function AllFriends(props) {
    console.log(props)
    return <FriendDiv path={`/friend/${props.id}`} key={props.data.id} name={props.name} data={props}>
                <p>{props.data.id}</p>
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