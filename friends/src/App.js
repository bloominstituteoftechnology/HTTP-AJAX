import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListFriends from './Components/ListFriends';
import AddFriend from './Components/AddFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
    friends:[],
    };

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <AddFriend state={this.state}/>
        <ListFriends friends={this.state.friends}/>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => {
        console.log('EROOORRRRR');
      })
  }  
}


export default App;
