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
        		<div>
        			<div>{friend.id}</div>
        			<div>{friend.name}</div>
        			<div>{friend.age}</div>
        			<div>{friend.email}</div>
        		</div>
        	)
        })}
      </div>
    );
  }
}

export default App;
