import React from 'react';
import './friend-list.css';

function FriendList(props) {
	return (
		<table>
		<tbody>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Email</th>
				<th>Edit</th>
				<th>Remove</th>
			</tr>
			{props.friends.map((friend)=>{
				return (
					<tr key={friend.id}>
						<td>{friend.name}</td>
						<td>{friend.age}</td>
						<td>{friend.email}</td>
						<td><button className="edit-btn" onClick={()=>{props.onEdit({friend: friend, history: props.history})}}>Edit</button></td>
						<td><button className="delete-btn" onClick={()=>{props.onDelete(friend.id)}}>Delete</button></td>
					</tr>
				) 
			})}
		</tbody>
		</table>
	);
}

export default FriendList;
