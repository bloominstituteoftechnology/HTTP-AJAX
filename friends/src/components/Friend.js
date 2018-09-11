import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const Card = styled.div`
	border: solid black 1px;
	padding: 1%;
	width: 70%;
	background-color: #d0d0ff;
	margin: 0 1% 10px 0;
`;

const EditForm = styled.form`
	display:flex;
	flex-direction:column;
	margin: 10px 0;
	font-size: 1rem;
	width: 70%;
	line-height: 1;
	border: solid black .5px;
	padding: 1.5%;
	background-color: #ffcca0;
	> input {
		border: solid black .5px;
	}
`;

const SubEditBtn = styled.button`
	margin-top: 10px;
	border: .5px solid black;
	font-size: 1.2rem;
	padding: 1%;
	background-color: lightblue;
	border-radius: 4px;
	&:hover {
		background-color: blue;
		color: white;
		cursor: pointer;
	}
`;

const DivBtns = styled.div`
	display: flex;
	flex-direction: column;
	width: 100px;
	margin-bottom: 15px;
`;

const DeleteBTN = styled.button`
	margin-top: 10px;
	border: .5px solid black;
	font-size: 1.2rem;
	padding: 1%;
	background-color: #ff9b9b;
	border-radius: 4px;
	&:hover {
		background-color: red;
		color: white;
		cursor: pointer;
	}
`;

class Friend extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			formToggle: false,
			editName: '',
			editEmail: '',
			editAge: '',
		};
	}

	toggleForm = () => {
		this.setState({
			formToggle: !this.state.formToggle,
		})
	}

	handleFriend = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	editFriend = () => {
		const editedFriend = {
			name: this.state.editName, 
			age: this.state.editAge, 
			email: this.state.editEmail 
		}
		axios
			.put(
				`http://localhost:5000/friends/${this.props.f.id}`,
				editedFriend
			)
			.then(response => {
				console.log(response);
				this.props.handleData(response.data);
			})
			.catch(err => console.log(err))
	}

	deleteFriend = () => {
		axios
			.delete(
				`http://localhost:5000/friends/${this.props.f.id}`
			)
			.then(response => {
				console.log(response);
				this.props.handleData(response.data);
			})
			.catch(err => console.log(err));
	}

	render(){
		return (
			<Card>
				<h2>{this.props.f.name}</h2>
				<p>Age: {this.props.f.age}</p>
				<p>Email: {this.props.f.email}</p>
			{this.state.formToggle ? (
			<div>
				<EditForm>
	        Name:
	         <input
	          type="text"
	          placehoder="friend name"
	          onChange={this.handleFriend}
	          name="editName"
	          value={this.state.editName}
	        /><br />
	        Age:
	        <input
	          type="text"
	          placehoder="friend age"
	          onChange={this.handleFriend}
	          name="editAge"
	          value={this.state.editAge}
	        /><br />
	        Email:
	        <input
	          type="text"
	          placehoder="friend email"
	          onChange={this.handleFriend}
	          name="editEmail"
	          value={this.state.editEmail}
	        />
	        </EditForm>
	        <DivBtns>
	        	<SubEditBtn onClick={this.editFriend}>Submit Edit</SubEditBtn>
	        	<DeleteBTN onClick={this.deleteFriend}>Delete Friend</DeleteBTN>
        	</DivBtns>
        </div>
			) : null}
			<button onClick={this.toggleForm}>Show Edit form</button>
			</Card>
		)
	}
}

export default Friend;