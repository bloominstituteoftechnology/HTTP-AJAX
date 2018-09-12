import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			name: '',
			age: '',
			email: ''
		};
	}

	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	newFriend = event => {
		event.preventDefault();
		if (this.state.name && this.state.age && this.state.email) {
			axios
				.post('http://localhost:5000/friends', {
					name: this.state.name,
					age: this.state.age,
					email: this.state.email
				})
				.then(response => {
					this.setState({
						friends: response.data,
						name: '',
						age: '',
						email: ''
					});
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			alert('Please fill in missing information');
		}
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(response => {
				this.setState({
					friends: response.data
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="FriendsList">
				{this.state.friends.map(friend => (
					<div key={friend.id}>
						<p>
							Name: <span>{friend.name}</span>
						</p>
						<p>
							Age: <span>{friend.age}</span>
						</p>
						<p>
							Email: <span>{friend.email}</span>
						</p>
						<br />
					</div>
				))}
				<form onSubmit={this.newFriend}>
					Add new friend
					<br />
					<label>
						Name
						<input
							type="text"
							name="name"
							onChange={this.changeHandler}
							value={this.state.name}
						/>
					</label>
					<label>
						Age
						<input
							type="number"
							name="age"
							onChange={this.changeHandler}
							value={this.state.age}
						/>
					</label>
					<label>
						Email
						<input
							type="text"
							name="email"
							onChange={this.changeHandler}
							value={this.state.email}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default FriendsList;
