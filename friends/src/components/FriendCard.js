import React from 'react';

const FriendCard = props => {
  return (
      <div> {props.friends.map(f => <div key ={f.id} className ='Friends'>
      <h2> {f.name} </h2>
      <h3> {f.age} </h3>
      <h3> {f.email} </h3>
      </div>
      )}
      </div>
  );
};

export default FriendCard;