import React, { Component } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
	margin-top: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: orange;
	padding: 5px;
	text-align: center;

	input {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 5px;
	}

	button {
		margin: 10px;
		width: 60%;
	}
`;

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: 21,
			email: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	resetState = () => {
		this.setState({
			name: "",
			age: 21,
			email: ""
		});
	};

	render() {
		return (
			<FormWrapper
				onSubmit={event => {
					event.preventDefault();
					this.props.addFriend(this.state);
					this.resetState();
				}}>
				<h3>
					You have {this.props.length} friends. It's sad. Add more
					friends...
				</h3>
				<input
					type='text'
					name='name'
					placeholder='Name'
					onChange={this.handleChange}
					value={this.state.name}
				/>
				<input
					type='number'
					min='21'
					max='120'
					name='age'
					placeholder='Age'
					onChange={this.handleChange}
					value={this.state.age}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<button type='submit'>
					If You Are Adding Friends This Way, You Obviously Haven't Made Them In Real Life
				</button>
			</FormWrapper>
		);
	}
}

export default Form;
