import React from 'react';

function Friend(props) {
  const { match, friendsArray, handleDeleteFriend } = props;
  const friend = friendsArray.find(friend => friend.id === Number(match.params.id) ) || {};
  const { id, name, age, email } = friend;

  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{email}</li>
      </ul>
      { Object.keys(friend).length === 0
          ? <div></div>
          : <button data-id={`${id}`} onClick={handleDeleteFriend}>Delete</button>
      }
    </div>
  )   
}

export default Friend;