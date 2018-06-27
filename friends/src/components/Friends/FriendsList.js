import React from 'react';
import Friend from './Friend';
import { CardsContainer } from '../ReusableComponents/FriendsCard';

const FriendsList = props => {
    const friends = props.friends.slice().reverse();

    return (
        <CardsContainer>
            {friends.map(friend => <Friend key={friend.id} friend={friend} handleSetData={props.handleSetData} />)}
        </CardsContainer>
    );
}

export default FriendsList;