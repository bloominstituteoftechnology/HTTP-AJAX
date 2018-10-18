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

  const changeHandler = event => {
    this.setState({[event.target.name]:event.target.value});
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
        <FriendsList friend={this.state.friends}/>
      </div>
    );
  }
}

export default App;
