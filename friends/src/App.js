import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {friends:[]}
	}

	componentDidMount(){
		axios
			.get('http://localhost:5000/friends')
			.then(response => this.setState({friends : response.data}))
			.catch(error => console.log(error));
	}







  render() {
    return (
      <div className="App">
        <h1> FRIENDS </h1>
        {this.state.friends.map(friend => {
        	return(
        		<div className = "Friend">
        			<div className = "Friend-ID">{friend.id}</div>
        			<div className = "Friend-Name">{friend.name}</div>
        			<div className = "Friend-Age">{friend.age}</div>
        			<div className = "Friend-Email">{friend.email}</div>
        			<button className = "Add-Button"> ADD_FRIEND </button>
        		</div>
        	)
        })}
      </div>
    );
  }
}

export default App;
