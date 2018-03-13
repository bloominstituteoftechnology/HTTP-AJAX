import React, { Component } from "react";
import axios from "axios";

class FriendsList extends Component {
	state = {
		friends: [],
		id: 7,
		name: "",
		age: "",
		email: ""
	};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends/`)
			.then((response) => this.setState(() => ({ friends: response.data })))
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	}

	addFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
		axios
			.post(`http://localhost:5000/friends/`, newFriend)
			.then(response => {
        this.setState({ name: "", age: "", email: "" 
      });
    })
			.catch(function(error) {
				console.log(error);
			});
	};

	handleInputChange = (event) => {
    const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
    console.log(this.state.age)
    console.log(this.state.name)
		return (
			<div>
				<form onSubmit={this.addFriend}>
					<label>
						Name:
						<input
              type="text"
              name="name"
							placeholder="Age"
							onChange={this.handleInputChange}
							value={this.state.name}
						/>
					</label>
					<label>
						Age:
						<input
              type="text"
              name="age"
							placeholder="Email"
							onChange={this.handleInputChange}
							value={this.state.age}
						/>
					</label>
					<label>
						Email:
						<input
              type="text"
              name="email"
							placeholder="Name"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
					</label>
					<button type="submit">add friend</button>
				</form>

				<ul className="friend-grid">
					{this.state.friends.map((friend) => {
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

export default FriendsList;
