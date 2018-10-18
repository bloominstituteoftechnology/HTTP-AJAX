import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: {
        name:"",
        age: "",
        email:""
      }
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends:response.data}))
      .catch(error => console.log(error))
  }

  changeHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  }

  addFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({friends: response.data}))
  }

  render() {
    return (
      <div className="App">
        <form>
          <input 
          type="text"
          placeholder="name" 
          onChange={this.changeHandler} 
          name="name" 
          value={this.state.newFriend.name}/>

          <input 
          type="text"
          placeholder="age" 
          onChange={this.changeHandler} 
          name="age" 
          value={this.state.newFriend.age} />

          <input 
          type="text"
          placeholder="email" 
          onChange={this.changeHandler} 
          name="email" 
          value={this.state.newFriend.email} />
        </form>

        <button onClick={this.addFriend}>Add new friend</button>
        <FriendsList friend={this.state.friends}/>
      </div>
    );
  }
}

export default App;
