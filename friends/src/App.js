import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import FriendList from './conponents/FriendList/friend-list';
import FriendForm from './conponents/FriendForm/friend-form';
import axios from 'axios';

class App extends Component {
	state = {friends: [],
		name: '',
		age: '',
		email: '',
	}

	handleNewFriend = (event) => {
		// new friend object to be passed to server
		let newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
		event.preventDefault();

		axios
			.post("http://localhost:5000/friends", newFriend)
			.then((res)=>{
				// set state with new updated friend list
				this.setState({friends: res.data});
  		}).catch((err)=>{
  			console.log(err);
  		});
	}

	handleOnChange = (event) => {
		// change input values
		this.setState({[event.target.name]: event.target.value});
	}

	onDelete = (id)=>{
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res)=>{
				this.setState({friends: res.data});
		}).catch((err)=>{

		});
	}

  	render() {
    return (
    	<div>
    		<Route path="/form" render={(props)=> <FriendForm  name={this.state.name} age={this.state.age} email={this.state.email} handleNewFriend={this.handleNewFriend} handleOnChange={this.handleOnChange} />} />
	    	<Route exact path="/" render={() => <FriendList friends={this.state.friends} onDelete={this.onDelete} />} />
    	</div>
    );
  }

   componentDidMount(){
   	console.log('get initial data');
   	// get request to get friend list from server
  		axios.get("http://localhost:5000/friends").then((res)=>{
  			// update state with friend list
  			this.setState({friends: res.data});
  		}).catch((err)=>{
  			console.log(err);
  		});
  	}
}

export default App;
