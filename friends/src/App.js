import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import FriendsComponent from './Components/FriendsComponent';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({friends});
      })
      .catch(error => console.log(error))
  }
  
  handleSubmit = (noNewFriendsOnlyAcquaintences) => {
    axios.post("http://localhost:5000/friends", noNewFriendsOnlyAcquaintences)
    .then(res => {
      const friends = res.data;
      this.setState({friends});
    })
    .catch(error => console.log(error))
  }

  render() {
    const {friends} = this.state
    console.log(friends)
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
        <FriendsComponent friends={friends}/>
        
      </div>
    );
  }
}

export default App;
