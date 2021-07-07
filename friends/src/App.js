import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendList from './Friends/FriendList';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<Route exact path="/" component={FriendList} />
			</div>
		);
	}
}
