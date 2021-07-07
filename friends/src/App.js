import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import Form from './components/Form';
import './App.css';

const url = new URL('http://localhost:5000/friends/');

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
    .get(url)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err))
  }

  addFriend = data => {
    axios
    .post(url, data)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err))
  }

  deleteFriend = id => {
    axios
    .delete(`${url}${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      });
    })
  }

  updateFriend = (data, id) => {
    axios
    .put(`${url}${id}`, data)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <div>
          <Friends friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} />
        </div>
        <div>
          <Form addFriend={this.addFriend}/>
        </div>
      </div>
    );
  }
}

export default App;
