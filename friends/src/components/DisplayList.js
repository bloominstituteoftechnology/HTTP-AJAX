import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

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
const fstyle = {
	border: '2px solid black',
	listStyleType: 'none'
};
const idStyle = {
	fontWeight: 'bold'
};
const titleStyle = {
	fontSize: 40
};
const btnStyle = {
	cursor: 'pointer',
	padding: 8
};
const mbtn = {
	cursor: 'pointer',
	padding: 8,
	color: 'blue',
	fontWeight: 'bold',
	backgroundColor: 'aqua',
	fontSize: 15
}
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
