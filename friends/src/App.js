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
		const { name, age, email } = this.state.friend;
		if (name.length === 0 || Number(age).length === 0 || email.length === 0) {
			alert('please add more info for your friend');
		} else {
			axios
				.post('http://localhost:5000/friends', this.state.friend)
				.then((res) => {
					this.setState({
						friends: res.data,
						friend: {
							name: '',
							age: '',
							email: '',
							id: Date.now()
						}
					});
				})
				.catch((err) => console.log(err));
		}
	};

	deleteFriend = (e, friendID) => {
		e.preventDefault();
		axios
			.delete(`http://localhost:5000/friends/${friendID}`)
			.then((res) => {
				this.setState({
					friends: res.data,
					friend: {
						name: '',
						age: '',
						email: '',
						id: Date.now()
					}
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<FriendsForm formHandler={this.formHandler} addNewFriend={this.addNewFriend} />
				<FriendsContainer
					key={this.state.id}
					friends={this.state.friends}
					updateInfo={this.updateInfo}
					deleteFriend={this.deleteFriend}
				/>
			</div>
		);
	}
}

export default App;
