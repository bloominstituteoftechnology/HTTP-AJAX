import React from 'react';
import axios from 'axios';

export default class FriendForm extends React.Component {
	state = {
			name: '',
			age: '',
			email: '',
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		axios
			.post('http://localhost:5000/friends', this.state)
			.then((response => {
				this.props.refresh();
				this.setState({ name: '', age: '', email: '' });
			}))
			.catch(() => {
				console.error('Could not find the friend');
			});
	};

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={this.state.name}
					onChange={this.handleInputChange}
				/>

				<label htmlFor="age">Age</label>
				<input
					type="number"
					id="age"
					name="age"
					value={this.state.age}
					onChange={this.handleInputChange}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={this.state.email}
					onChange={this.handleInputChange}
				/>
				<button type="submit">Save</button>
			</form>
		);
	}
}
