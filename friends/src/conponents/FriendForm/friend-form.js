import React from 'react';
import './friend-form.css';
// we may have to use class component for this class since we have form
function FriendForm (props) {

	// this part is to handle the input

		return (
			<div className="friend-form">
				<form onSubmit={props.handleNewFriend}>

					<input name="name" value={props.newFriend.name} onChange={props.handleOnChange} type="text" />

					<input name="age" value={props.newFriend.age} onChange={props.handleOnChange} type="text"/>

					<input name="email" value={props.newFriend.email} onChange={props.handleOnChange} type="text"/>

					<button>Create friend</button>
				</form>
			</div>
		);
}

export default FriendForm;
