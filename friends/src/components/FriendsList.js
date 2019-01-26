import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsList = props => {
	const { friends, update, deleteFriend } = props;

	if (friends < 1) return <h2>Loading...</h2>;
		else {

		return (
			<div>
				{friends.map(f => {
					return (
            <div>
              <Friend key={f.id} id={f.id} friend={f}/>
              <button id={f.id} onClick={deleteFriend}>Delete</button>
              <Link to="/updatefriend"><button id={f.id} onClick={ e => {update(e, f.id)}}>Update</button></Link>
            </div>
					)
				})}
			</div>
		);
	}
};

export default FriendsList;