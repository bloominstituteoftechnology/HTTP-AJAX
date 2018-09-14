import React from 'react';
import Friend from './Friend';

const FriendList = props =>{
    return(
      <div className="friend-list">
   
        {props.friends.map(friend => (
            <Friend key={friend.id}
                    friend={friend} />
          ))

        }
        {          console.log(props)}
        <button name="form-button" 
                onClick={()=>props.history.push("/form")}>Add New Friend?</button>
      </div>
    )
}

export default FriendList;
