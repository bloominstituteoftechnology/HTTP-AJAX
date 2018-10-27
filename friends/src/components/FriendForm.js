import React, { Component } from "react"

class FriendForm {
	state = {
		name: "",
		age: "",
		email: ""
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addFriend(this.state)
	}

	handleChange = e => {
		e.preventDefault()
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					type="text"
					id="name"
					placeholder="name"
				/>
				<input
					onChange={this.handleChange}
					type="text"
					id="age"
					placeholder="age"
				/>
				<input
					onChange={this.handleChange}
					type="text"
					id="email"
					placeholder="email"
				/>
				<button type="submit">Add Friend</button>
			</form>
		)
	}
}
