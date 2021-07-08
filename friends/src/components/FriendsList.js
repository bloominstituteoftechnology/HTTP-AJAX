import React from 'react';

// props below is this.state.friends that we passed along in App.js via <FriendsList />

const FriendsList = props => {

    return ( 
        <div>
            {props.friends.map((friend, index) => {
                return (
                  // whenever we map through data we must have a unique index specified and set to 'key' 
                    <div className="friends-list" key={index}>  
                        <div>{friend.name}</div>
                        <div>{friend.age}</div>
                        <div>{friend.email}</div>
                    </div>
                );
            })}
        </div>
    );
}


export default FriendsList;