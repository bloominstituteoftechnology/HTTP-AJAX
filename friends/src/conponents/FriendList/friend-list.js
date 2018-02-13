import React from 'react';
import './friend-list.css';
import {Link} from 'react-router-dom';

function FriendList(props) {
	return (
		// wrapper div
		<div className="friend-list">
			{props.friends.map((friend)=>{
				// map through friends
				return (
					// return each friend
					// i don't like li.. i'm gonna use div
					<div className="friend">
						<div className="name">{friend.name}</div>
						<div className="age">{friend.age}</div>
						<div className="email">{friend.email}</div>
					</div>
				) 
			})}
		</div>
	);
}

export default FriendList;


// we need to create form and create new friend
