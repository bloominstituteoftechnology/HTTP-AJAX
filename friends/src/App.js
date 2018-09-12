import React, { Component } from 'react';
import Axios from 'axios';
import FriendsList from './components/friendslist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    Axios
      .get('http://localhost:5000/friends')
      .then( (response) => this.setFriends(response.data) )
      .catch( (err) => console.error(err) );
  }

  setFriends(friendArr) {
    this.setState({friends: friendArr});
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
