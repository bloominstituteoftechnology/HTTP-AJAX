import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import FriendList from './components/FriendList'
import SubmitFriend from './components/SubmitFriend'

class App extends Component {
  constructor(){
    super();
    this.state ={
      friends: [],
      newFriend: {
        id: '',
        name: '',
        age: '',
        email: '',
      }
    }
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

  updateCall() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  // setInterval(updateCall, 1000)
  // setInterval(function(){
  // axios
  //   .get('http://localhost:5000/friends')
  //   .then(response => {
  //     this.setState(() => ({ friends: response.data }));
  //   })
  //   .catch(error => {
  //     console.error('Server Error', error);
  //   })}, 1000)

  postRequest = e => {
    e.preventDefault()
    let newItem = this.state.newFriend
    axios
    .post('http://localhost:5000/friends', newItem)
    .then(reponse=>{
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      this.setState({newFriend: {
        id: '',
        name: '',
        age: '',
        email: '',
      }})
    })
    .catch(error =>{console.log('this error holy cow', error)})
  }

  updateFriend = (e) => {
    let update = this.state.newFriend
    update[e.target.name] = e.target.value
    update['id'] = this.state.friends.length+1
    this.setState({
      newFriend: update
    })
  }

  render() {
    // console.log(this.state.friends);
    // console.log(typeof this.state.friends);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SubmitFriend
          postRequest={this.postRequest}
          value={this.state.newFriend}
          handleChange={this.updateFriend}
        />
        <FriendList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
