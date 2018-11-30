import React, { Component } from "react";
import axios from "axios";
import Friend from "./components/Friend";
import styled from "styled-components";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
	}
	body{
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
		margin: 0;
  	padding: 0;
	}
`;

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

const FriendSection = styled.div`
	width: 100%;
	border: 1px solid lightgrey;
	margin-top: 10px;
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
				<GlobalStyle />
				<Form
					addFriend={this.addFriend}
					title={`You have ${
						this.state.data.length
					} friends. It's sad. Add more. ${
						this.state.data.length > 10
							? "You are gunna need a lot more"
							: ""
					}`}
					buttonText={`Add friends in real life, too`}
					inputColor='orange'
				/>

				{this.state.data.map(item => (
					<FriendSection>
						<Friend
							data={item}
							key={item.id}
							onSubmit={this.editFriend}
							title={`Edit ${item.name}'s Info`}
							deleteFriend={this.deleteFriend}
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
									data={item}
									edit
								/>
							)}
						/>
					</FriendSection>
				))}

				<H4> Please clap </H4>
			</Wrapper>
		);
	}
}

export default App;
