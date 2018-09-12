import React from 'react';
import Friend from './Friend';

const FriendList = props =>{
    return(
      <div className="friend-list">
        {console.log(props.friends)}
        {props.friends.map(friend => (
          <div>
            {/* <h2>{friend.id+': '+friend.name}</h2> */}
            <Friend key={friend.id}
                    friend={friend} />
          </div>
          ))
        }
      </div>
    )
}

export default FriendList;
