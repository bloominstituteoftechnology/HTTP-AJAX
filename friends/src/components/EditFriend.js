import React from 'react';

const EditFriendForm = props => {
    return ( 
    <input 
    placeholder={props.friend.name} 
    type="text" 
    onChange={props.editFriend}
    />
  );
};

export default EditFriendForm;