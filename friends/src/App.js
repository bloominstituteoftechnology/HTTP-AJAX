import React, { Component } from 'react';
import './App.css';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        friends: []
     };
    }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState({ friends: response.data });
    })
    .catch(error => {
        console.log('OOPS', error);
    })
  }

  render() {
    return (
      <div>
        <h1>The Team</h1>
        {this.state.friends.map(friend =>(
          <FriendsList friend={friend} key={friend.id} />
        ))}
       {/* <FriendForm /> */}
      </div>
    );
  }
}

export default App;
