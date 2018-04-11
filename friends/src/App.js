import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
      friends: [],
      update: 0
		};
  }
  
	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then((response) => {
				this.setState({ friends: response });
			})
			.catch((error) => {
				console.error(error);
      });
	}

	render() {
		return (
			<div className="App">
				<FriendsList friends={this.state.friends} />
        <FriendsForm updateFriends={() => this.componentDidMount()}/>
			</div>
		);
	}
}

export default App;
