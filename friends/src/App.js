import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendCard from './components/FriendCard'

const H1 = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	color: black;
	font-family: Impact, Charcoal, sans-serif;
	margin-bottom: 5%;
	text-align: center;
`;


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      friends: [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((response) => {
				console.log(response);
				this.setState({
					friends: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
  }
  
 
//  addFriend = () => {
//     axios.post('http://localhost:5000/friends', friends ).then(response => console.log(response)).catch(err => console.log(err))
//  }

	render() {
		return (
			<React.Fragment>
			
          <H1>View Our Current Friend List</H1>
					<FriendList data={this.state.friends} />
          <H1>Add Yourself to Our Friend List</H1>
					<FriendCard
						addFriend={this.addFriend}
					/>
				
			</React.Fragment>
		);
	}
}


export default App;
