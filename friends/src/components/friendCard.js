import React from 'react'

const FriendCard = (props) => {
  return (
    <div>
		{props.friends.map((friend) => {
				return (
		  <div className="friend-container" key={friend.email}>
			<h3>Name: {friend.name}</h3>
			<p>Age: {friend.age}</p>
		    <p>Email: {friend.email}</p>
		  </div>
	    );
	  })}
    </div>
  );
};


export default FriendCard