import React from 'react';
import Friend from './Friend';
import { CardsContainer } from '../ReusableComponents/FriendsCard';

const FriendsList = props => {
    return (
        <CardsContainer>
            {props.friends.map((friend, index) => <Friend key={index} friend={friend} handleSetData={props.handleSetData} />)}
        </CardsContainer>
    );
}

export default FriendsList;