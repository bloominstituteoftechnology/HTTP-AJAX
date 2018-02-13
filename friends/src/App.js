import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FriendList from './conponents/FriendList/friend-list';
import FriendForm from './conponents/FriendForm/friend-form';
import axios from 'axios';

class App extends Component {
	state = {friends: [], newFriend: {
		name: '',
		age: '',
		email: '',
	}}
	// when i do event.target.value its undefined
	// yes but i'm not geting the value
	handleNewFriend = (event) => {
		event.preventDefault();
		console.log(this.state.newFriend);
	}

	handleOnChange = (event) => {


	}

  	render() {
    return (
    	<div>
	    	<FriendList friends={this.state.friends}/>
	    	<FriendForm newFriend={this.state.newFriend} handleNewFriend={this.handleNewFriend} handleOnChange={this.handleOnChange} />
    	</div>
    );
  }

   componentDidMount(){
  		axios.get("http://localhost:5000/friends").then((res)=>{
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
