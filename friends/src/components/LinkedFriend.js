import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
	border: solid black 1px;
	padding: 1%;
	width: 70%;
	background-color: #d0d0ff;
	margin: 0 1% 10px 0;
`;

export default class LinkedFriend extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			friend: null,
		};
	}

	componentDidMount(){
		const friendId = this.props.match.params.id
		this.fetchFriend(friendId);
	}

	fetchFriend = id => {
		axios
			.get(`http://localhost:5000/api/friends/${id}`)
			.then(response => {
				console.log(response)
				this.setState( () => ({ friend: response.data }));
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
   if (!this.state.friend) {
     return <div>Loading friend information...</div>;
   }
   const { name, age, email } = this.state.friend;
		return (
			<Card>
				<h2>{name}</h2>
				<p>Age: {age}</p>
				<p>Email: {email}</p>
			</Card>
		)
	}
}