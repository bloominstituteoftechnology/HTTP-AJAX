import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friend from "./components/Friend";
import styled from "styled-components";
import Form from "./components/Form";

const Wrapper = styled.div`
	width: 250px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
`;

const H4 = styled.h4`
	text-align: center;
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/friends")
			.then(responce => {
				console.log(responce);
				this.setState({ data: responce.data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	addFriend = friend => {
		if (friend.name != "")
			axios
				.post("http://localhost:5000/friends", friend)
				.then(responce => {
					console.log(responce);
					this.setState({ data: responce.data });
				})
				.catch(err => {
					console.log(err);
				});
	};

	deleteFriend = id => {
		axios
		.delete(`http://localhost:5000/friends/${id}`)
		.then(responce => {
			console.log(responce);
			this.setState({ 
				data: responce.data 
			});
		})
		.catch(err => console.log(err));
	};

	render() {
		return (
			<Wrapper>
				<Form
					addFriend={this.addFriend}
					length={this.state.data.length}
				/>

				{this.state.data.map(item => (
					<Friend data={item} key={item.id} />
				))}

				<H4> Please clap </H4>
			</Wrapper>
		);
	}
}

export default App;
