import React from 'react';
import './friend-list.css';
import {Link} from 'react-router-dom';

function FriendList(props) {
	return (
		<div className="friend-list">
			{props.friends.map((friend)=>{
				return (
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
