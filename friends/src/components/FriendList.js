import React from 'react';
import PropTypes from 'prop-types';


const FriendList  = ({friend}, props) => {



  const {id, name, age, email} = friend;


  return (
    <div className = 'friend-container'>
      <div className = 'friend'>
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

     <button className = 'button_delete'  > Delete</button>

    </div>
  );


            // onClick = {props.deleteFriend(friend.id)}
            // onClick = {props.deleteFriend({id})}
};

FriendList.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string
};


export default FriendList;