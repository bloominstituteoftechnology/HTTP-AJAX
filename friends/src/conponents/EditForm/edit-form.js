import React from 'react';
import './edit-form.css';

function EditForm (props) {
	return (
		<div className="edit-form">
			<form>
				<input className="name" name="name" placeholder="Name" value={props.name} onChange={props.handleOnChange} type="text" />
				<input className="age" name="age" placeholder="Age" value={props.age} onChange={props.handleOnChange} type="text"/>
				<input className="email" name="email" placeholder="Email" value={props.email} onChange={props.handleOnChange} type="text"/>
			</form>
			<div className="button" onClick={()=>{props.handleEditFriend(props.history)}}>Edit Friend</div>
		</div>
	);
}

export default EditForm;
