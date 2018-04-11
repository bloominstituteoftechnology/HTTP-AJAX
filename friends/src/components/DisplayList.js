import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
const inpStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box'
}
const fstyle = {
    border: '2px solid black',
    listStyleType: 'none'

}

class DisplayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			Name: '',
			Email: '',
			Age: ''
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends/`)
			.then((response) => {
				this.setState({ lists: response.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleTextInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	saveNoteData = () => {
		const list = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
		axios
			.post(`http://localhost:5000/friends/`, list)
			.then((savedList) => {
				console.log(savedList);
				let index = this.state.lists.length;
				this.setState({ lists: savedList.data });
			})
			.catch((err) => {
				console.log(err);
			});
		{
			this.state.lists.map((friend) => <FriendList key={friend.id} friend={friend} />);
		}

		this.setState({ Name: '', Email: '', Age: '' });
	};

	render() {
		return (
			<div>
				<header>
					<h1>Friend List</h1>

					
				</header>
				<input
                    type="text"
                    style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="Name"
					name="Name"
					value={this.state.Name}
				/>
				<input
                    type="text"
                    style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="Age"
					name="Age"
					value={this.state.Age}
				/>
				<input
                    type="text"
                    style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="Email"
					name="Email"
					value={this.state.Email}
				/>
				<button onClick={this.saveNoteData}>Save Friend</button>
				{this.state.lists.map((friend) => <FriendList key={friend.id} friend={friend} />)}
			</div>
		);
	}
}
class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: props.friend
		};
	}
	render() {
		const { id, name, age, email } = this.state.friend;
		return (
			<div>
				<ul style={fstyle} >
					<li>ID: {id}</li>
					<li>Name: {name}</li>
					<li>Age: {age}</li>
					<li>Email: {email}</li>
				</ul>
			</div>
		);
	}
}

// function FriendList({ friend }) {
// 	const { id, name, age, email } = friend;
// 	return (
// 		<div>
// 			<ul>
// 				<li>{id}</li>
// 				<li>{name}</li>
// 				<li>{age}</li>
// 				<li>{email}</li>
// 			</ul>
// 		</div>
// 	);
// }

export default DisplayList;
