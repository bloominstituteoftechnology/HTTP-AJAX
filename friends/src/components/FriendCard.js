import React, { Component } from "react";

export default class FriendCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		// console.log(this.props.match.params.id);
		const id = this.props.match.params.id;
		this.fetchFriend(id);
	}
	
	fetchFriend = (id) => {
		axios
			.get("http://localhost:5000/friends")
			.then(response => {
				console.log(`response: ${response}`);
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		return (<h1>Test</h1>);
	}	
}