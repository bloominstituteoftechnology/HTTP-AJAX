import React from 'react';
import styled from 'styled-components';

const FriendContainer = styled.div`
    padding-top: 20px;
`;

const Friend = (props) => {
    const friend = props.friends.find(friend => Number(friend.id) === Number(props.match.params.id))
    const newFriend = {...friend}
    const id = props.match.params.id

    return (
        <FriendContainer>
            <h1>{newFriend.name}</h1>
            <h3>{newFriend.email}</h3>
            <p>{newFriend.name} is <strong>{newFriend.age}</strong> years old.</p>
            <button onClick={() => {props.delete(id)}}>Remove Friend</button>
        </FriendContainer>
    )
}

export default Friend;