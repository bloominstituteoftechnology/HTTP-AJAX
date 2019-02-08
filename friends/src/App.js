import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';

// class App extends Component {
//   render() {
//     return (
//       <FriendList />
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
        console.log(this.state.friends);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FriendList friends={this.state.friends} />
    )
  }
}

export default App;
