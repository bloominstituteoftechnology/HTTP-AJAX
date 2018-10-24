import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',

    };
    this.addFriendHandler = this.addFriendHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  addFriendHandler = e => {
    this.setState({ 
      name : e.target.value
     });
  }

  submitFriendHandler = e => {
    const name = {name: this.state.name}
    axios
      .post('http://localhost:5000/friends', { name })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends} />
      <AddFriendForm 
        friend={this.state.friends}
        addFriendHandler={this.addFriendHandler}
        friendName={this.state.friends.name}
        friendAge={this.state.friends.age}
        friendEmail={this.state.friends.email}
      />
      </div>
    );
  }
}

export default App;
