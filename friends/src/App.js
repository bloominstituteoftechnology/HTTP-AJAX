import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from "./FriendList";


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendData: [],
      friend: {
        name: '',
        age: 0,
        email:''
      }
    };
  }

   componentDidMount() {
     axios
     .get('http://localhost:5000/friends')
     .then(response => {
       this.setState({ friendData: response.data });
     })
     .catch(err => 
      console.log(err)); 
   }

  render() {
    return (
      <div classNmae="App">
         <h2> Friend List: </h2>
        <FriendList friend={this.state.friendData} /> 
      </div>
    )
  }
}

export default App;