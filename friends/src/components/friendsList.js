import React from 'react';


const FriendsList = props =>{
    return(
        <div>
            {props.friends.map(friend =>{
                return (
                    <div key={friend.id}>
                    <h1>My Friends</h1>
                    <div>
                    <h2>Name: {friend.name}</h2>
                    <p>Age:{friend.age}</p>
                    <p>Email:{friend.email}</p>
                    </div>
                    </div>
                ) 
            })}

        </div>
    )
}







export default FriendsList; 