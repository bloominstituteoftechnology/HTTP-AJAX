import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log('response.data', response.data);
        console.log('response.data.message', response.data.message);
        this.setState({
          friends: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postNewFriend = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/friends", {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email

    })
    .then((response) => console.log(response))
    .catch(err => console.log(err))
    this.forceUpdate();
    }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  });
  }
  render() {
    return (
      <div className="App">

        <Route path="/" render={() => <FriendsList />} />
        <FriendForm handleChange={this.handleChange} postNewFriend={this.postNewFriend}/>
      </div>
    );
  }
}

export default App;
