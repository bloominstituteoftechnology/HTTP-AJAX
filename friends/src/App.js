import React, { Component } from 'react';
import './App.css';
import FriendsContainer from './components/FriendsContainer';
import FriendsForm from './components/FriendsForm';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [ {} ],
			friend: {
				name: '',
				age: '',
				email: ''
			},
			editingId: null,
			activeFriend: null,
			isEditing: false
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
		if (name.length <= 0 || Number.isInteger(parseInt(age)).length <= 0 || email.length <= 0) {
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

	updateInfo = (e, friendID) => {
		e.preventDefault();

		axios.put(`http://localhost:3333/items/${friendID}`, this.state.friend).then((res) => {
			console.log(res.data);
		});
	};

	setUpUpdateForm = (e, friend) => {
		e.preventDefault();
		this.setState({
			friend,
			isEditing: true,
			editingId: friend.id
		});
	};

	render() {
		const { friends, isEditing } = this.state;
		return (
			<div className="App">
				<Route
					exact
					to="/"
					render={(props) => <FriendsForm formHandler={this.formHandler} addNewFriend={this.addNewFriend} />}
				/>
				<Route
					exact
					to="/"
					render={(props) => (
						<FriendsContainer
							friends={friends}
							{...props}
							setUpUpdateForm={this.setUpUpdateForm}
							isEditing={isEditing}
							deleteFriend={this.deleteFriend}
							updateInfo={this.updateInfo}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
