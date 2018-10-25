import React from 'react';
import styled from 'styled-components';

const FriendListWrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: 100%;
`
const SingleFriend = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    margin: 5px;
    cursor: pointer;
`
function FriendsList (props) {
    return (
      <FriendListWrapper>
        {props.friends.map(friend =>
            <SingleFriend>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </SingleFriend>)}
      </FriendListWrapper>
    )
}

export default FriendsList;