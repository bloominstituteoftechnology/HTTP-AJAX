import React, { Component } from 'react';
import axios from 'axios';

import Friends from './component/Friends';
import NewFriendForm from './component/NewFriendForm';

class App extends Component {
  state = {
    friends: []
  }
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)) // to do: notify user with error message
  }
  handleSubmit = (newFriend) => {
    axios.post("http://localhost:5000/friends", newFriend )
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)) // to do: notify user with error message
  }
  render() {
    const { friends }= this.state
    return (
      <div>
        <NewFriendForm handleSubmit={this.handleSubmit} />
        <Friends 
          friends={friends} />
      </div>
    );
  }
}

export default App;
