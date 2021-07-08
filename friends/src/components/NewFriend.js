import React, { Component } from 'react';
import axios from 'axios';

class NewFriend extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: '',
			email: ''
		};
	}

	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submit = event => {
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
					this.props.history.push('/');
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			alert('Please fill in missing information');
		}
	};

	render() {
		return (
			<form onSubmit={this.submit}>
				Add new friend
				<br />
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
		);
	}
}

export default NewFriend;
