import React from 'react';
import './friend-list.css';
import {Link} from 'react-router-dom';

function FriendList(props) {
	return (
		<div>
			<div className="friend-list">
				{props.friends.map((friend)=>{
					return (
						<div key={friend.id} className="friend">
							<div className="name">{friend.name}</div>
							<div className="age">{friend.age}</div>
							<div className="email">{friend.email}</div>
							<button onClick={()=>{props.onDelete(friend.id)}}>Delete</button>
						</div>
					) 
				})}

			</div>
			<button>Creat New Friend</button>
		</div>
	);
}

export default FriendList;
