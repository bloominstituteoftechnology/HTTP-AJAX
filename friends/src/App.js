import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';
import FriendAdd from './FriendAdd';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">UltimateFriends.com</h1>
        </header>
        <FriendAdd ref={(newData) => {this.friendData = newData}} />
        {console.log(this.friendData)}
          //Mangaged to setstate on friendadd on input + enter, now, here, we are trying to access the state of FriendAdd.js so we can add some of the
          //information to the state here (friends)
        <FriendsList friendProp={this.state} />
      </div>
    );
  }

//   <FieldEditor
//   ref={(fieldEditor1) => {this.fieldEditor1 = fieldEditor1;}
//   {...props}
// />

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
}

export default App;
