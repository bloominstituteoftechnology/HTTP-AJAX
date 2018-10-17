import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    fetch('http://localhost:5000/friends')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 
          friends: data,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
