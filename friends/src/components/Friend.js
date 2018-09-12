import React from 'react';

const Friend = props => {
  const { name, age, email } = props.friend;

  return(
    <div className="friend-card">

      <div>
        Name: <em>{name}</em>
      </div>

      <div>
        Age: <strong>{age}</strong>
      </div>

      <div>
        Email: <strong>{email}</strong>
      </div>
    </div>
  );
};

export default Friend;