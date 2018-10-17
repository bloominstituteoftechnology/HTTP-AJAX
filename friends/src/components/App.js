import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {},
    }
  }

  componentDidMount() {
    const url = 'http://localhost:5000';
    axios.get(`${url}/friends`,)
      .then(({data}) => this.setState({friends: data}))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading Friends...</h1>
    }
    return (
      <div className="App">
        {this.state.friends.map(friend => {
         return (
          <div key={friend.email}>
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
