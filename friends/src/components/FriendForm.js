import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
	width: 50%;
	border: 2px solid #cfc7d2;
	border-radius: 10px;
	background: #9e90a2;
	display: flex;
	flex-flow: column nowrap;
	padding: 2.5%;
	margin: 5% 33%;
	justify-content: space-around;
	align-items: space-between;
`;
const Input = styled.input`
	border: 1px solid black;
	border-radius: 5px;
	margin: 5% 5% 0;
	font-size: 1.5rem;
	width: 80%;
	text-align: center;
	align-self: center;
`;

const Label = styled.label`
	font-size: 1.8rem;
	margin: 1% 5% 2%;
	color: #272932;
	text-align: center;
`;

const Button = styled.button`
	border-radius: 10px;
	padding: 1% 5%;
	margin: 1% 25%;
	width: 50%;
	background: #8ba6a9;
	color: #272932;
	font-weight: bold;
	border: 2px solid #272932;
	:hover {
		border: 2px solid #cfc7d2;
		background: #272932;
		color: #cfc7d2;
	}
`;

class FriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: '',
			friend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	handleChange = (event) => {
		this.setState({
			friend: {
				...this.state.friend,
				[event.target.name]: event.target.value
			}
		});
	};

	handleMode = () => {
		if (this.props.mode === 'Add') {
			return this.addFriend;
		} else {
			return this.updateFriend;
		}
	};

	addFriend = (event) => {
		event.preventDefault();
		this.props.addFriend(this.state.friend);
	};

	updateFriend = (event) => {
		event.preventDefault();
		this.props.updateFriend(this.state.friend, this.props.match.params.id);
	};
	render() {
		return (
			<Form onSubmit={this.handleMode()}>
				<Label>
					Name
					<Input
						type="text"
						name="name"
						value={this.state.friend.name}
						onChange={this.handleChange}
					/>
				</Label>
				<Label>
					Age
					<Input
						type="number"
						name="age"
						value={this.state.friend.age}
						onChange={this.handleChange}
					/>
				</Label>
				<Label>
					Email
					<Input
						type="text"
						name="email"
						value={this.state.friend.email}
						onChange={this.handleChange}
					/>
				</Label>
				<Button type="submit">{this.props.mode}</Button>
			</Form>
		);
	}
}
export default FriendForm;

FriendForm.propTypes = {
	friend: PropTypes.shape({
		name: PropTypes.string,
		age: PropTypes.number,
		email: PropTypes.string
	}),
	handleChange: PropTypes.func,
	addFriend: PropTypes.func
};
