import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';  

import './App.css';
import NewFriendForm from './NewFriendForm';
import FriendsList from './FriendsList'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '', 
      email: ''
    };
  }

componentDidMount () {
  axios.get('http://localhost:5000/friends').then((response) => {
    console.log(response.data); 
    this.setState({
      friends: response.data
    })
  }); 
  
}

handleOnChange = event => {
  this.setState({[event.target.name] : event.target.value})
}

  render() {
    
    return (
      <div className="App">
        

        <Route path = '/' render={(props) => <FriendsList {...props} friends = {this.state.friends.slice()}/>} />
        <Route path ='/create-friend'  render = {(props) => <NewFriendForm {...props} handleChange ={this.handleOnChange} 
        name = {this.state.name}  age = {this.state.age} email = {this.state.email}/>} />
      
      
      
      </div>
    );
  }
}



export default App;
