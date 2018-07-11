import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('GET RESPONSE: ', response);
        this.setState({ data: response.data })
      })
      .catch(err => {
        console.log(err);
      });
    
  }
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList friends={this.state.data} />
      </div>
    );
  }
}

export default App;
