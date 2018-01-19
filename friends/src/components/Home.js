import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<h1 className="Home__text">Welcome home!</h1>

				<NavLink to="/friends" className="HomeBox">
					<li className="friend">
						<div>View Friends</div>
					</li>
				</NavLink>
			</div>
		);
	}
}
