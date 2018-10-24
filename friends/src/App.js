import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './FriendsList';
import FriendForm from './FriendForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: []
    };
}
  
componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
          console.error('Ummm...what...!?!', error);
        });
}
  
  addFriend = event => {
    event.preventDefault();
    if(this.state.name)
    axios.post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
    .then(response => {
      this.setState({ friends: response.data, name: "", age: "", email: "" });
      window.location.reload();
    })
    .catch(err => console.log("Umm...that's a problem", err));
  }
   handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  };
  
  
  render() {
    return (
      <div className="App">
        <FriendForm 
          addFriend={this.addFriend}
          inputName={this.state.name}
          inputAge={this.state.age}
          inputEmail={this.state.email}
          handleInput={this.handleInput}/>
        <FriendsList />
      </div>  
    );
  }
}

export default App;
