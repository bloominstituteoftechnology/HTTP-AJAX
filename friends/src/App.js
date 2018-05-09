import React, { Component } from 'react';
import Friends from './component/Friends';
import InputForm from './component/InputForm';
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
        this.setState({ friends });
      })
      .catch(err => console.log(err))
  }

  handleSubmit = (newFriend) => {
    axios.post("http://localhost:5000/friends", newFriend)
    .then(res => {
      const friends = res.data;
      this.setState({ friends });
    })
    .catch(err => console.log(err))
  }

  render() {
      const { friends } = this.state
      console.log(friends)
      return (
        <div>
          <InputForm handleSubmit={this.handleSubmit} />
          <Friends friends={friends} />
        </div>
      );
  }
}

export default App;
