import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './component/FriendsList';
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
      console.log(response)
        this.setState(() => ({ friends: response.data }));
    })
    .catch(error => {
        console.log('OOPS', error);
    })
  }
  render() {
    return (
      <div>
        {this.state.friends.map(friend =>(
          <FriendsList friend={friend} key={friend.id} />
        ))}
       
      </div>
    );
  }
}

export default App;
