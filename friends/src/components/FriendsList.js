import React from 'react'
import {FriendsContainer, ListItem} from './styledComponents'

const FriendsList = (props) =>{
    console.log(props)
    return (
        <div>
            <FriendsContainer >
                {props.friends.map((friend) => (
                <ListItem key={friend.id} color={Number(friend.id)}>
                        <h2>Name: {friend.name}</h2>
                        <h4>Age: {friend.age}</h4>
                        <h4>Email: {friend.email}</h4>
                    </ListItem>
                ))}
            </FriendsContainer>
        </div>
    )

}

export default FriendsList;