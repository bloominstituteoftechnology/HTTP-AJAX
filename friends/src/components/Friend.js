import React from 'react';

const Friend = (props) => {
	return (
		<div>
			<h2>{props.f.name}</h2>
			<p>Age: {props.f.age}</p>
			<p>Email: {props.f.email}</p>
		</div>
	)
}

export default Friend;