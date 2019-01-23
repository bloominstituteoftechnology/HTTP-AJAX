import React from 'react';
import styled from 'styled-components';

const FriendItem = styled.div`
    width: 150px;
    text-align: center;
    border: 1px solid lightgrey;
    background-color: lightblue;
    border-radius: 15px;
    margin: 15px;
    padding: 15px 10px;
    i{
        font-size: 10rem;
        margin: 10px;
        background-color: white;
        border-radius: 500px;
        border: 5px solid white
    }
    h1{
        margin: unset;
    }
    p{
        font-size:1.2rem;
        font-weight: 500;
        margin: 5px 0;
    }
    button{
        background-color: white;
        border: 1px solid lightgrey;
        padding: 5px 10px;
        border-radius: 5px;
        margin: 0 5px
    }
`;

const ItemContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const Friends = props => {
    return(
        <ItemContainer>
            {props.friendsList.map(friend => {
                return (
                    <FriendItem key={friend.id}>
                        <i className="fas fa-user-circle" />
                        <h1>{friend.name}</h1>
                        <p>{friend.email}</p>
                        <p>{friend.age}</p>
                        <button onClick={e => props.deleteFriend(e, friend.id)}>x</button>
                        <button onClick={e => props.updateFriend(e, friend)}>Update</button>
                    </FriendItem>
                )
            })}
        </ItemContainer>
    )
}

export default Friends;