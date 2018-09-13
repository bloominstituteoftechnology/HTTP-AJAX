import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [ {
        id: '',
        name: '',
        age: '',
        email: ''
        }
      ],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount () {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(err => console.log("You dun goofed!", err));
  }

  addFriend = event => {
    event.preventDefault();
    if(this.state.name)
    axios.post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
    .then(response => {
      this.setState({ friends: response.data, name: "", age: "", email: "" });
    })
    .catch(err => console.log("You dun goofed!", err));
  }




  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div className="App">
       <h1>Friends List</h1>
       <div className="friends-list">

       {this.state.friends.map(friend => (
          <FriendsList key={friend.id} friend={friend}  />
        ))}
       </div>
       <div className="friends-form">
       <FriendsForm
        addFriend={this.addFriend}
        inputName={this.state.name}
        inputAge={this.state.age}
        inputEmail={this.state.email}
        handleInput={this.handleInput} 
        />
        </div>
      </div>
    );
  }
}

export default App;
