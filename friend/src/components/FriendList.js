import React from 'react';
import Friend from './Friend';

const FriendList = props =>{
    return(
      <div className="friend-list">
        <h1>Friends List:</h1>
        <button name="form-button" 
                onClick={()=>props.history.push("/form")}>Add New Friend</button>
        {props.friends.map(friend => (
            <Friend {...props}
                    key={friend.id}
                    friend={friend} 
                    handleDeleteFriend={props.handleDeleteFriend}
                    handleUpdateFriend={props.handleUpdateFriend}/>
          ))
        }
        
      </div>
    )
}

export default FriendList;
