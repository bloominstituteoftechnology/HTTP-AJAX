import React from "react"

import Friend from "./Friend"

const FriendsList = props => {
	const friends = props.friends.map(friend => {
		return <Friend key={friend.id} friend={friend} />
	})

	return <div className="friends-container">{friends}</div>
}

export default FriendsList
