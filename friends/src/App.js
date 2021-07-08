import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route exact path="/" component={FriendsList} />
				<Route path="/newfriend" component={NewFriend} />
			</div>
		);
	}
}

export default App;
