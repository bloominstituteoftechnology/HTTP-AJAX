import React from 'react';
import Friend from './Friend';


const Friends = props => {
  const routeToFriend = (ev, friend)  => {
    ev.preventDefault();
    props.history.push(`/friends/${friend.id}`);
    props.getFriendById(friend.id)
  }
    return (
      <div className='friends'>
        {props.friendList.map(friend =>
          // <div className='clickable' onClick={ev => routeToFriend(ev, friend)}>
            <Friend key={friend.id} friend={friend} editFriend={props.editFriend}
            deleteFriend={props.deleteFriend}
            />
            // </div>
          )}

      </div>
    )
  }

export default Friends;
