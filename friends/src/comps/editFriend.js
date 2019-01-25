import React from 'react';
import Form from './form.js';

const EditFriend = props => {
  let friend = props.friends.find(fr => {
    return fr.id === Number(props.match.params.id);
  });
  return (
    <Form
      {...props}
      name={friend.name}
      age={friend.age}
      email={friend.email}
      id={friend.id}
      updateState={props.updateState}
    />
  );
};

export default EditFriend;
