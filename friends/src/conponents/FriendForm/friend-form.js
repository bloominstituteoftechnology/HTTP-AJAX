import React from 'react';
import './friend-form.css';

function FriendForm (props) {
	return (
		<div className="friend-form">
			<form onSubmit={props.handleNewFriend}>
				<input name="name" value={props.name} onChange={props.handleOnChange} type="text" />
				<input name="age" value={props.age} onChange={props.handleOnChange} type="text"/>
				<input name="email" value={props.email} onChange={props.handleOnChange} type="text"/>
				<button>Create Friend</button>
			</form>
		</div>
	);
}

export default FriendForm;
