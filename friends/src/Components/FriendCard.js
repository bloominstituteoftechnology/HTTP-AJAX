import React from 'react';

const FriendCard = ({friend, deleteFriend, history}) => {
  const button = deleteFriend ?  <button onClick={(e) => {
    deleteFriend(e,friend.id);
    history.push('/');
  }} 
  className={'delete'}>DELETE</button> : null

  return (
    <div className='friend-card'>
      <div>
        Name: <span>{friend.name}</span>
      </div>
      <div>
        Location: <span>{friend.name}</span>
      </div>
      <div>
        Age: <span>{friend.age}</span>
      </div>
      <div>
        Email: <span>{friend.email}</span>
      </div>
    </div>
  );
}

export default FriendCard;