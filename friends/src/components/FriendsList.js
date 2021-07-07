import React from 'react';

const FriendsList = props => { 
    return (
        <div className="friends-list">
            {props.friends.map(friend => {
                return(
                    <div className="friend-card" key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <button onClick={(e) => props.deleteFriend(e, friend.id)} className="delete-button">
                            Delete Friend
                        </button>
                    </div>
                )
            })};
        </div>
    )
}
export default FriendsList;

//first item return from mapping needs a key

//functional component?  return what? 


// return(
//     <Friends 
//         key={friend.id}
//         friend={friend}
//         handleSetData={props.handleSetData}
//     />
// )