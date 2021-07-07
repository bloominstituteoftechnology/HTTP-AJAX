import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import FriendList from './Form';

const inpStyle = {
	width: '50%',
	marginLeft: '20px',
	marginRight: '20px',
	marginTop: '20px',
	marginBottom: '20px',
	padding: '12px 20px',
	margin: '8px 0',
	color: 'blue',
	fontWeight: 'bold',
	fontSize: '15px',
	// boxSizing: 'border-box',
	display: 'inline-flex',
	justifyContent: 'center'
};

const titleStyle = {
	fontSize: 40
};

const mbtn = {
	cursor: 'pointer',
	padding: 8,
	color: 'blue',
	fontWeight: 'bold',
	backgroundColor: 'aqua',
	fontSize: 15
}

class DisplayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			Name: '',
			Email: '',
			Age: '',
			showUpdateNote: false
		};
	}

	componentDidMount() {
		this.getAJAX();
	}
	getAJAX = () => {
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
				this.setState({ lists: savedList.data });
				this.getAJAX();
			})
			.catch((err) => {
				console.log(err);
			});

		this.setState({ Name: '', Email: '', Age: '' });
	};

	render() {
		return (
			<div>
				<header>
					<h1 style={titleStyle}>Friend List</h1>
				</header>
				<input
					type="text"
					style={inpStyle}
					onChange={this.handleTextInput}
					placeholder="First Name		Last Name"
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
				<div>
					<button onClick={this.saveNoteData} style={mbtn}>
						Add Friend
					</button>
				</div>
				{this.state.lists.map((friend) => (
					<FriendList key={friend.id} friend={friend} getAJAX={this.getAJAX} saveNoteData={this.saveNoteData} componentDidMount={this.componentDidMount} />
				))}
			</div>
		);
	}
}

DisplayList.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			age: PropTypes.number.isRequired,
			email: PropTypes.string.isRequired
		})
	)
};


export default DisplayList;
