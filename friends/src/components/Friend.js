import React from "react"

const Friend = props => {
	return (
		<div>
			<h1>Friends</h1>
			{props.friend.name}
			{props.friend.age}
			{props.friend.email}
		</div>
	)
}

export default Friend
