import React from 'react' 
import './friendsContainer.css'

export default function FriendsContainer (props){
    const friends = props.friends

    return (
        <div className="friendsList">
        {friends.map(friend => 
            <div className="friendsCard">
                <div className="data">
                    <div><strong>Name:</strong> {friend.name}</div>
                    <div><strong>Age:</strong> {friend.age}</div>
                    <div><strong>Email:</strong> {friend.email}</div>   
                </div>
                <button>Update</button>
                <button>Delete</button>
            </div>
        )}
        </div>
    )
}