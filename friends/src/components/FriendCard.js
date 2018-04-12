import React, { Component } from "react";

export default class FriendCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: null
		};
	}

	componentDidMount() {
		// console.log(this.props.match.params.id);
		const id = this.props.match.params.id;
		this.fetchFriend(id);
	}
	// fetch movies by the given id
	fetchFriend = (id) => {
		axios
			.get(`http://localhost:5000/friends${id}`)
			.then(response => {
				console.log(`response: ${response}`);
				this.setState(() => { movie: response.data });
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
		const { name, age, email } = this.state.friend;
		return (
			<div>
				<Friend friend={this.state.friend} />
			</div>
		);
	}	
}