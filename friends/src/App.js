import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Friend from './Components/Friend';
import Form from './Components/Form';


class App extends Component {
constructor() {
  super();
  this.state={
    friends: []
  }
}

addBuddy = (e,friends) => {
e.preventDefault();
axios.post('http://localhost:5000/friends', friends)
.then(res => this.setState({friends: res.data}))
.catch(err => console.log(err + 'this anit it!'))
}

componentDidMount(){
  axios.get('http://localhost:5000/friends')
  .then(res => this.setState({friends: res.data}))
  .catch(err => console.log(err + 'something went wrong, Kong!'));
}

  render() {
    return (
      <div className="App">

      {this.state.friends.map((friend)=>{
        return(
          <Friend friend={friend} key={friend.id}/>
        );
      })}
      <Form addBuddy={this.addBuddy} />
      </div>
    );
  }
}

export default App;
