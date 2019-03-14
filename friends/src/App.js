import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import FriendList from './component/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: []
    };
  }  

componentDidMount() {
  axios
    .get("https://localhost:5000/friends")
    .then(response => this.setState({ friends: response.data }))
    .catch(error => console.log(error));
}

  render() {
    return (
      <div className='App'>
          render={props => <FriendList {...props} friends={this.state.friends} />}
      </div>
    );
  }   
}

export default App;
