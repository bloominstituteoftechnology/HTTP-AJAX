import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsArray: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friendsArray: res.data})
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err })
      } )
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
           yo yo
          </p>
          <FriendsList />
          <FriendForm />
        </header>
      </div>
    );
  }
}

export default App;
