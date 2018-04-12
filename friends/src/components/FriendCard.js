import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend";

export default class FriendCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: 0
		};
	}

	componentDidMount() {
		// console.log(this.props.match.params.id);
		const id = this.props.match.params.id;
		this.fetchFriend(id);
	}
	// fetch friend by the given id
	fetchFriend = (id) => {
		axios
			.get(`http://localhost:5000/friends`)
			.then(response => {
				// console.log('response', response.data[id - 1]);
				this.setState({ friend: response.data[id - 1]});
			})
			.catch(error => {
				console.error(error);
			});
	}
	// only fetch new movies
	componentWillReceiveProps(newProps) {
		if (this.props.match.params.id !== newProps.match.params.id) {
			this.fetchFriend(newProps.match.params.id);
		}
	}

	render() {
		// console.log('friend:', this.state.friend);
		return (
			<div>
				<Friend friend={this.state.friend} />
			</div>
		);
	}
}