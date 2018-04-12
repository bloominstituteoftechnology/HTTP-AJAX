import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
}
componentDidMount() {
  axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
      console.log(this.state.friends)
    })
    .catch(err => {
      console.log(err);
    })
   };

  render() {
    return (
        <div className="friend__card">
          {this.state.friends.map(friend => (
              <Friends key={friend.id} friend={friend}/>
          ))}
        </div>
    );
  }
}

function Friends({friend}) {
  const{name, age, email, id} = friend;
  return(
      <div className="friend_test">
        <div className="friend">{name}</div>
        <div className="friend">{age}</div>
        <div className="friend">{email}</div>
        <div className="friend">{id}</div>
      </div>
  )
}

export default App;
