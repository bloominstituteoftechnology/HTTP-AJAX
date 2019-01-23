import React from 'react';

import { CardContainer } from './FriendsStyles';

const FriendCard = (props) => {
    console.log(props)
    return(
        <CardContainer className={`grow bg-light-purple f3`}>
            <h1>{props.friend.name}</h1>
            <h3>{props.friend.age}</h3>
            <h3>{props.friend.email}</h3>
        </CardContainer>
    )
}

export default FriendCard;