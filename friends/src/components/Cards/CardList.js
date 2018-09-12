import React from 'react';
import Card from './Card'

function CardList(props) {
    return (
        props.data.map(friend => ( <Card key={friend.id} friend={friend} /> ))
    )
}

export default CardList;