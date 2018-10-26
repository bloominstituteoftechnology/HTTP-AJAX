import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			name: '',
			age: '',
			email: '',
		};
	}
	componentDidMount() {
		axios.get('http://localhost:5000/friends')
      .then( response => this.setState({ data: response.data }))
      .catch(err => console.log(err))
  }
	

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });

    }
    submitNewFriend = e => {
        e.preventDefault();
    
    
    axios.post("http://localhost:5000/friends", {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,})
      .then( response => this.setState({data: response.data})) 
      .catch(err => console.log(err))
  }

	render() {
		return (
      <div>
 <form onSubmit={this.submitNewFriend}>
						<input
							type="text"
							name="name"
							onChange={this.inputChangeHandler}
							value={this.state.name}
							placeholder="Name"
						/>
						<input
							type="text"
							name="age"
							onChange={this.inputChangeHandler}
							value={this.state.age}
							placeholder="Age"
						/>
						<input
							type="text"
							name="email"
							onChange={this.inputChangeHandler}
							value={this.state.email}
							placeholder="Email"
						/>
						<button type="submit">Add Friend</button>
					</form>
			<div>
				<FriendsList data={this.state.data}/>
				</div>
					
          </div>
		);
    }
  }

export default App;
