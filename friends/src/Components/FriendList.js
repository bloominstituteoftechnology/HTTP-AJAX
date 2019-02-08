import React from 'react';
import styled from 'styled-components';
const FriendList = (props) => {
	return (
		<div>
			{props.friends.map((friend) => (
				<ul key={friend.id}>
					<button type="submit" onClick={(props) => props.updateFriend(friend.id)}>
						{friend.updateFriend}
						Update Friend
					</button>
					{friend.name} {friend.age} {friend.email}
					<button type="submit" onClick={() => props.deleteFriend(friend.id)}>
						{friend.deleteFriend}
						delete Friend
					</button>
				</ul>
			))}
		</div>
	);
};

export default FriendList;
