import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import FriendsList from './Components/FriendsList';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };
}

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
      <h2>A list of friends, forthwith:</h2>
        {this.state.friends.map(friend => {
          return (
            <div>
            <h1>{friend.name}</h1>
            <p>, hello.</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
