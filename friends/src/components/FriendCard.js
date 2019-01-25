import React from 'react';

import { CardContainer } from './FriendsStyles';

const FriendCard = (props) => {
    return(
        <CardContainer onClick={e => props.populateFriend(e, props.friend.id)} className={`grow bg-light-purple f3`}>
            <h1>{props.friend.name}</h1>
            <h3>{props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
            <button onClick={e => props.deleteFriend(e,props.friend.id)}>X</button>
        </CardContainer>
    )
}

export default FriendCard;