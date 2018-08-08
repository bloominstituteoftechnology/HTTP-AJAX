import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const Friendos = (props) => {
  return (
    <div className="friendz">
      {props.friends.map(friend => (
      <div className="friendCard">
        <div>{friend.name}</div>
        <div>age: {friend.age}</div>
        <div>email: {friend.email}</div>
      </div>
      ))}
    </div>
  )
}

const FriendForm = () => {
  return (
    <form>
      <p>Add a new frand!</p>
      <input placeholder="Name"/>
      <input placeholder="Age"/>
      <input placeholder="Email"/>
    </form>
  )
}

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
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });

     
  }


  render() {
    return (
      <div className="App">
      <Friendos friends={this.state.friends}/>
      <FriendForm />
      </div>
    );
  }
}

export default App;
