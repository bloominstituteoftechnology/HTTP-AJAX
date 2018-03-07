import React from 'react';
import { NavLink } from 'react-router-dom';

import './NotFound.css';

export default class NotFound extends React.Component {
	render() {
		return (
			<div>
				<h1 className="NotFound__text">Page Not Found</h1>

				<NavLink to="/" className="GoHome">
					<li className="friend">go home</li>
				</NavLink>
			</div>
		);
	}
}
