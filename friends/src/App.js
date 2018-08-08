import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
          .then(res => {
            console.log(res.data);
            this.setState({ friends: res.data, isLoading: false });
          })
          .catch(err => {
            console.log(err);
          });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ?
          <h1>Loading Friends, one moment please...</h1> :
          <FriendList friends={this.state.friends} />
        }
      </div>
    );
  }
}

export default App;
