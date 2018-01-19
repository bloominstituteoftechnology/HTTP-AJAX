import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

import './index.css';

ReactDOM.render(
	<Router>
		<div>
			<NavBar />

			<Route exact path="/" component={Home} />
			<Route path="/friends" component={FriendsList} />
			<Route path="/add-friend" component={AddFriend} />
		</div>
	</Router>,
	document.getElementById('root')
);
