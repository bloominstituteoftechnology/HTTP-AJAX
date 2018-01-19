import React, { Component } from 'react';
import axios from 'axios';

class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			error: null,
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const endpoint = 'http://localhost:5000/friends';

		axios
			.get(endpoint)
			.then((response) => {
				this.setState(() => ({ friends: response.data }));
			})
			.catch(error => {
				this.setState({ error: "Something went wrong" });
			});
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		const info = this.state.value;
		const endpoint = 'http://localhost:5000/friends';

		const infoArr = info.split(' ');
		const data = {
			name: infoArr[0],
			age: infoArr[1],
			email: infoArr[2]
		};

		axios
			.post(endpoint, data)
			.then(response => {
				alert('Friend Added ' + info);
			})
			.catch(() => {
				console.log('There was an error posting');
			});
	}

	render() {
		return (
			<div>
				<div className="friend-title">Lambda Friends</div>

				<div className="friend-form">
					<form onSubmit={this.handleSubmit}>
						<label>
							Add Friend:
							<input type="text" placeholder="Name Age Email" value={this.state.value}
								onChange={this.handleChange} />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>

				<ul className="friend-grid">
					{this.state.friends.map(friend => {
						return (
							<li key={friend.id} className="friend">
								<div className="friend-name">{friend.name}</div>
								<div className="friend-age">{`Age: ${friend.age}`}</div>
								<div className="friend-email">{`Email: ${friend.email}`}</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default FriendList;
