import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
	const { friends } = props;

	if (friends < 1) return <h2>Loading...</h2>;
		else {

		return (
			<div>
				{friends.map(f => {
					return (
            <div>
              <Friend key={f.id} id={f.id} friend={f}/>
              <button id={f.id} onClick={ e => props.update(e, f.id)}>Delete</button>
              <button id={f.id} onClick={props.update}>Update</button>
            </div>
					)
				})}
			</div>
		);
	}
};

export default FriendsList;