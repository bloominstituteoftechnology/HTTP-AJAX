import React from 'react'
import Friends from './Friends'

const FriendsList = props => {
    return (
    <div>  
        {props.friends.map(friend => {
            return (
            <Friends 
                friends={friend}
                key={friend.id}
                delete={props.delete}
                updateForm={props.updateForm}
            />
            )
            
        })}
    </div>
    )
    
}

export default FriendsList