import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    console.log("inside CDM");
    axios
        .get("http://localhost:5000/friends")
        .then(res => {
            this.setState({ data: res.data});
        })
        .catch(err => {
            console.log('CRAP!', err);
        });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.data.map(friend => (
          <FriendsList friend={friend} key={friend.id} />
        ))}
          <FriendForm />
        </div>
      </div>
    );
  }
}

export default App;
