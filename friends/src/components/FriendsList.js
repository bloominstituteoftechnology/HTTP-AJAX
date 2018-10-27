import React from 'react'
import {FriendsContainer, ListItem, RemoveButton, EditButton} from './styledComponents'

const FriendsList = (props) =>{

    return (
        <div>
            <FriendsContainer >
                {props.friends.map((friend,index) => (
                <ListItem key={friend.id} color={Number(index)}>
                        <h2>Name: {friend.name}</h2>
                        <h4>Age: {friend.age}</h4>
                        <h4>Email: {friend.email}</h4>
                        <RemoveButton onClick={() =>{props.deleteFriend(friend.id)}}>Remove</RemoveButton>
                        <EditButton onClick={() =>{props.showEditForm(friend.id)}}>Edit Friend</EditButton>
                    </ListItem>
                ))}
            </FriendsContainer>
        </div>
    )

}

export default FriendsList;