// React
import React, { Component } from 'react';

// Components
import FriendsList from './components/FriendsList';

// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<FriendsList />
			</div>
		);
	}
}

export default App;
