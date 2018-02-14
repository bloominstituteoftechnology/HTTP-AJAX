import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function NavBar (props) {
	return (
		<div className="navbar">
			<Link to="/friendlist"><div className="link friend-list">Friend List</div></Link>
			<Link to="/form"><div className="link add-friend">Add Friend</div></Link>
		</div>
	);
}

export default NavBar;
