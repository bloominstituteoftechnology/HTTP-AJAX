import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './conponents/FriendList/friend-list';
import FriendForm from './conponents/FriendForm/friend-form';
import NavBar from './conponents/NavBar/navbar';
import axios from 'axios';
import EditForm from './conponents/EditForm/edit-form';

class App extends Component {
	state = {friends: [],
		name: '',
		age: '',
		email: '',
		editId: ''
	}

	handleNewFriend = (history) => {
		if(this.state.name !== ''){
			// new friend object to be passed to server
			let newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

			axios
				.post("http://localhost:5000/friends", newFriend)
				.then((res)=>{
					// set state with new updated friend list
					this.setState({friends: res.data, age: '', name: '', email: '', view: '', editId: ''});
					history.push("/friendlist");

	  		}).catch((err)=>{
	  			console.log(err);
	  		});
  		}
	}

	handleEditFriend = (history)=>{
		if(this.state.editId !== ''){

			let editFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

			axios
				.put(`http://localhost:5000/friends/${this.state.editId}`, editFriend)
				.then((res)=>{
					console.log(res.data);
					this.setState({friends: res.data, age: '', name: '', email: '', view: '', editId: ''});

					history.push("/friendlist");
			}).catch((err)=>{

			});
		}
	}

	handleOnChange = (event) => {
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

	onEdit = (data) => {
		this.setState({age: data.friend.age, name: data.friend.name, email: data.friend.email, editId: data.friend.id});
		data.history.push("/edit");
	}

  	render() {
    return (
    	<div className='container'>
    		<NavBar />

    		<Route path="/form" render={(props)=> <FriendForm  {...props} name={this.state.name} age={this.state.age} email={this.state.email} handleNewFriend={this.handleNewFriend} handleOnChange={this.handleOnChange} />} />

    		<Route path="/edit" render={(props)=> <EditForm  {...props} name={this.state.name} age={this.state.age} email={this.state.email} editId={this.state.editId} handleEditFriend={this.handleEditFriend} handleOnChange={this.handleOnChange} />} />

	    	<Route exact path="/friendlist" render={(props) => <FriendList {...props} friends={this.state.friends} onDelete={this.onDelete} onEdit={this.onEdit}/>} />

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