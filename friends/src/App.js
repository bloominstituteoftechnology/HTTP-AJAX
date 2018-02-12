import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListFriends from './Components/ListFriends';

class App extends Component {
  state = {
    friends:[],
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <form>Add New Friends</form>
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
