import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const fstyle = {
	border: '2px solid black',
	listStyleType: 'none'
};
const idStyle = {
	fontWeight: 'bold'
};

const btnStyle = {
	cursor: 'pointer',
	padding: 8
};

const dbtn = {
	color: 'red',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}
const abtn = {
	color: 'blue',
	cursor: 'pointer',
	padding: 8,
	fontWeight: 'bold',
	margin: 10
}

class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: props.friend,
			nlist: this.friend,
			Name: '',
			Email: '',
			Age: '',
			showUpdateNote: false
		};
	}
	handleTextInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	showUpdateNote = () => {
		this.setState({ showUpdateNote: !this.state.showUpdateNote });
	};

	deleteFriend = (FriendID) => {
		axios
			.delete(`http://localhost:5000/friends/${FriendID}`)
			.then((response) => {
				this.props.getAJAX();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	updateFriend = (FriendID) => {
		
		const friend = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
		axios
			.put(`http://localhost:5000/friends/${FriendID}`, friend)
			.then((response) => {
				
				this.setState({showUpdateNote: false, Name: '', Email: '', Age: '' });
				this.props.getAJAX();
				
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const { id, name, age, email } = this.props.friend;
		return (
			<div>
				<ul style={fstyle}>
					<li>
						<span style={idStyle}>ID: </span>
						{id}
					</li>
					<li>
						<span style={idStyle}>Name: </span>
						{name}
					</li>
					<li>
						<span style={idStyle}>Age: </span>
						{age}
					</li>
					<li>
						<span style={idStyle}>Email: </span>
						{email}
					</li>

					<button onClick={this.showUpdateNote} style={btnStyle}>Update Friend Details</button>

					{this.state.showUpdateNote ? (
						<div>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={name}
								name="Name"
								value={this.state.Name}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={email}
								name="Email"
								value={this.state.Email}
							/>
							<input
								type="text"
								onChange={this.handleTextInput}
								placeholder={age}
								name="Age"
								value={this.state.Age}
							/>
							<button onClick={() => this.updateFriend(id)} style={abtn}>Save Friend Details</button>
							<button onClick={() => this.deleteFriend(id)} style={dbtn}>
								Delete Friend
							</button>
						</div>
					) : null}
				</ul>
			</div>
		);
	}
}
export default FriendList;