import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendInfo from './components/FriendInfo';
import FriendInput from './components/FriendInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
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

  InputText = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  submitHandler = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post('http://localhost:5000/friends', friend)
      .then(param => {
        this.setState({ name: '', age: '', email: ''});
        // this.componentDidMount();
      })
      .catch(err => {
        console.error(err);
      });
  };

  editFriend = () => {
    //put request
  }

  deleteFriend = () => {
    //// have id but minus object
  }

  render() {
    return (
      <div>
         <FriendInput 
        handleTextInput={this.InputText}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        handleSubmit={this.submitHandler}
        />
        <FriendInfo param={this.state.friends}/>
      </div>
    );
  }
}

export default App;
