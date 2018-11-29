import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friend from "./components/Friend";
import styled from "styled-components";
import Form from "./components/Form";
import { Route } from "react-router-dom";

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

	editFriend = (data, id) => {
		axios
			.put(`http://localhost:5000/friends/${id}`, data)
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
					title={`You have ${
						this.state.data.length
					} friends. It's sad. Add more
					friends...`}
					buttonText={`If You Are Adding Friends This Way, You Obviously Haven't Made Them In Real Life`}
					inputColor='orange'
				/>

				{this.state.data.map(item => (
					<div>
						<Friend
							data={item}
							key={item.id}
							onSubmit={this.editFriend}
							title={`Edit ${item.name}'s Info`}
						/>
						<Route
							exact
							path={`/edit/${item.id}`}
							render={props => (
								<Form
									{...props}
									editFriend={this.editFriend}
									title={`Edit ${item.name}'s Info`}
									buttonText={`Save Changes`}
									inputColor={"white"}
									id={item.id}
									edit
								/>
							)}
						/>
					</div>
				))}

				<H4> Please clap </H4>
			</Wrapper>
		);
	}
}

export default App;
