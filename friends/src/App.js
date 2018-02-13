import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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

  	render() {
    return (
    	<div>
    		<FriendForm name={this.state.name} age={this.state.age} email={this.state.email} handleNewFriend={this.handleNewFriend} handleOnChange={this.handleOnChange} />
	    	<FriendList friends={this.state.friends}/>
    	</div>
    );
  }

   componentDidMount(){
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

      // <BrowserRouter>
      // 	<Switch>
      // 	<Route path="/form" component={FriendForm} />
      //   <Route path="/" component={FriendList} />

      //   </Switch>
      // </BrowserRouter>
