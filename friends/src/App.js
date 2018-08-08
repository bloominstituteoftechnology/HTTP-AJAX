import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
constructor(){
  super()
  this.state = {
    friends: [],
    name: '',
    age: '',
    email: ''
  }
}

componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then (response => {
    console.log(response);
    this.setState({friends: response.data})
  })
  .catch(err => {
    console.log(err)
  })
}

friend = e => {
  this.setState({[e.target.name]: e.target.value})
}

newFriend = () => {

}

  render() {
    return (
      <div className="App">

      <form>
      
      <input
      type='text'
      placeholder='name'
       />

      </form>


      {this.state.friends.map((friend, index) => {
        return <ul key={index}>
        <li>Name: {friend.name}</li>
        <li>Age: {friend.age}</li>
        <li>Email: {friend.email}</li>
        </ul>
      })}
      </div>
    );
  }
}

export default App;
