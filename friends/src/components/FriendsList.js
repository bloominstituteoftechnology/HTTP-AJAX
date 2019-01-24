import React from 'react';

import FriendCard from '../../src/components/FriendCard';

const FriendsList = (props) => {
  

    return(
      <div>
        <h1 className="friends-title">These are my friends:</h1>
        <div className="friends-list">
          {props.friends.map(friend => (
            <FriendCard 
              name={friend.name} 
              age={friend.age} 
              email={friend.email} 
              key={friend.id}
              id={friend.id}
              deleteFriend={props.deleteFriend}
              editFriend={props.editFriend}
              currentEdit={props.currentEdit}
              onEditSelect={props.onEditSelect}
            />
          ))}
        </div>
          
      </div>
    )
  

}

export default FriendsList;