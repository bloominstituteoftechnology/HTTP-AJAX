import React from 'react';


const FriendList  = (props) => {
  return (
    <div className = 'friend-container'>
      <div className = 'friend_name'>
        NAME: {name}
      </div>

      <div className = 'friend_age'>
        AGE: {age}
      </div>

      <div className = 'friend_email'>
        EMAIL: {email}
      </div>

    </div>
  );



};

FriendList.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  email: propTypes.string
};


export default FriendList;