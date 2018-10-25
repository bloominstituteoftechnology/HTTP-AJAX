import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';// import jaklundun from 'govi'; initial commit
import axios from 'axios';

import FriendInfoForm from './components/FriendInfoForm';
import FriendsList from './components/FriendsList';
import AddFriendButton from './components/AddFriendButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
     friends: [],
     name: '',
     age: '',
     email: '',
      }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(res => this.setState({friends: res.data}))
  }

  handleFriendFormInput = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });  
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header> 
        <FriendsList friends= {this.state.friends} />
        <FriendInfoForm handleFriendFormInput = {this.handleFriendFormInput}/>
        <AddFriendButton />
        <br/>
      </div>
    );
  }
}

export default App;
