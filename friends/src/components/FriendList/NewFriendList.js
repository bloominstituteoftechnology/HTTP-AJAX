import React from 'react';

function NewFriendList(props) {
  return (
    <div>
      { props.newFriendsArray.length !== 0
          ? props.newFriendsArray.map(friend => {
              const { id, name, age, email } = friend;
              return (
                <div>
                  <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{age}</li>
                    <li>{email}</li>
                  </ul>
                </div>
              )})   
          : <p>There is not any new friends yet :(</p>
      }
    </div>
  )
}

export default NewFriendList;