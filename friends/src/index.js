import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Friend from './components/Friend';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Home from './components/Home';
import NotFound from './components/NotFound';

import './index.css';

ReactDOM.render(
	<Router>
		<div>
			<NavBar />

			<Switch>
				<Route exact path="/friend/:id" component={Friend} />
				<Route exact path="/add-friend" component={AddFriend} />
				<Route exact path="/friends" component={FriendsList} />
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>,
	document.getElementById('root')
);
