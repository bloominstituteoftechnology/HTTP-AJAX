import React, { Component } from 'react';
import './App.css';
import FriendsContainer from './components/FriendsContainer';
import FriendsForm from './components/FriendsForm';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [ {} ],
			friend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setState({ friends: res.data }))
			.catch((err) => console.log(err));
	}

	formHandler = (e) => {
		this.setState({
			friend: {
				...this.state.friend,
				[e.target.name]: e.target.value
			}
		});
	};

	addNewFriend = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/friends', this.state.friend)
			.then((res) => {
				this.setState({
					friends: res.data,
					friend: {
						name: '',
						age: '',
						email: ''
					}
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		console.log(this.state.friends);
		return (
			<div className="App">
				<FriendsContainer friends={this.state.friends} />
				<FriendsForm formHandler={this.formHandler} addNewFriend={this.addNewFriend} />
			</div>
		);
	}
}

export default App;
