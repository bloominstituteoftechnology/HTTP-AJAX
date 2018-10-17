import React from 'react';

const Friend = props => {
    const {name, age, email} = props.friend;
    return (
      <div className="friend">
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p> 
      <button onClick={() => props.handleDelete(props.friend.id)}>Delete Friend</button>
      </div>
    );
  };
  
  export default Friend;
  