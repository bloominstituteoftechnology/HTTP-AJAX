import React from 'react';

const FriendDisplay = props => {
  return(
    <div>
      {props.name} : {props.email}
    </div>
  );
}

export default FriendDisplay;
