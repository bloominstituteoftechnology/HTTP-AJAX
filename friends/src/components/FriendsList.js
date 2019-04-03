import React from 'react'
import FriendCard from './FriendCard';

export default function (props){

    if (!props.friends) return <h3>Loading Friends...</h3>

    console.log(props)

    return (
        <div>
            {props.friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)}
        </div>
    )
}