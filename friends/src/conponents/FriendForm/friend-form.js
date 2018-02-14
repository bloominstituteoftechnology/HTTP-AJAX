import React from 'react';
import './friend-form.css';

function FriendForm (props) {
	return (
		<div className="friend-form">
			<form>
				<input className="name" name="name" placeholder="Name" value={props.name} onChange={props.handleOnChange} type="text" />
				<input className="age" name="age" placeholder="Age" value={props.age} onChange={props.handleOnChange} type="text"/>
				<input className="email" name="email" placeholder="Email" value={props.email} onChange={props.handleOnChange} type="text"/>
			</form>
			<div className="button" onClick={()=>{props.handleNewFriend(props.history)}}>Add Friend</div>
		</div>
	);
}

export default FriendForm;
