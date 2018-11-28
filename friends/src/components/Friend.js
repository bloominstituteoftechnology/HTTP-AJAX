import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    margin: 10px;
    border: 1px solid grey;
    max-width: 100%;
    padding: 0 15px;
`

const Friend = props => {
    return (
        <FriendWrapper >
            <p> Name: {props.data.name} </p>
            <p> Age: {props.data.age} </p>
            <p> Email: {props.data.email} </p>   
        </FriendWrapper>
    )
}

export default Friend;