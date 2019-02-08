import React from 'react';

const FriendList = (props) => {
	return (
		<div>
			{props.friends.map((friend) => (
				<ul key={friend.id}>
					<button type="submit" onclick={(props) => props.updateFriend(friend.id)}>
						{friend.updateFriend}
						Update Friend
					</button>
					{friend.name} {friend.age} {friend.email}
					<button type="submit" onclick={() => props.deleteFriend(friend.id)}>
						{friend.deleteFriend}
						delete Friend
					</button>
				</ul>
			))}
		</div>
	);
};

export default FriendList;
