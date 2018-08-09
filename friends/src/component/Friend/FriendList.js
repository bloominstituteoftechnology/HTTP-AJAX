import React from 'react';
import styled from 'styled-components';

const Friend = styled.div`
    border: 1px solid black;
    padding: 1rem;
    margin: 0 auto;
    width: 300px;
`
const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
`

const FriendList = props => {
    if(props.loading){
        return <h2>Loading Data...</h2>
    }
    return (
        <Div>
            {props.friends.map((friend) =>
                <Friend key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button id={friend.id} onClick={props.delete}>Delete Friend</button>
                    <button id={friend.id} onClick={props.update}>Update Info</button>
                </Friend>
            )}
        </Div>
    )


}

export default FriendList;