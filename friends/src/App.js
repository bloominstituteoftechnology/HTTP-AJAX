import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(response => this.setState({friends: response.data}))
         .catch(error => console.log(error))
  }

  addHandler = event => {
    
    this.setState({ 
      newFriend: {
      ...this.state.newFriend,
      [event.target.name] : event.target.value
      }
    })
  }

 addNewFriend = (event) => {
   event.preventDefault();
   axios.post('http://localhost:5000/friends', this.state.newFriend)
              .then(response => this.setState({ friends: response.data}))
 }





  render() {
    return (
      <div className="App">
      {
        this.state.friends.map((friend, i ) => {
          return <FriendList key={i} data={friend}  />
        })
      }
        <div className="form">
          <form>
            <button onClick={this.addNewFriend}>Submit</button>
            <input onChange={this.addHandler} type="text" name="name" value={this.state.newFriend.name} placeholder="Name"></input>
            <input onChange={this.addHandler} type="text" name="age" value={this.state.newFriend.age} placeholder="Age"></input>
            <input onChange={this.addHandler} type="text" name="email" value={this.state.newFriend.email} placeholder="Email"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;