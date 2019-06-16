import React from 'react';

const EditFriend = () => {
  return (
    <div>
      {props.friends.map((friend) => {
        return <Friend handleSetData={props.handleSetData} key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default EditFriend;
