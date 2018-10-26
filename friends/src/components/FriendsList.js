import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Forms from './Forms';

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: 0,
      email: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState(() => ({friends: response.data}));
    }).catch(error => {
      console.error('Server Error', error);
    });
  }

  submitNewFriend = (e) => {
    e.preventDefault()
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', {friend: friend}).then(response => {
      this.setState({friends: response.data})
      console.log(response.data)
    }).catch(error => {
      console.error('Server Error', error);
    });
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }


  render() {
    return (<div className="friend-list">
      <Forms submitNewFriend={this.submitNewFriend} inputChangeHandler={this.inputChangeHandler}/> {this.state.friends.map(friend => (<FriendDetails key={friend.email} friend={friend}/>))}
    </div>);
  }
}

function FriendDetails({friend}) {
  const {id, name, age, email} = friend;
  return (<div className="friend-card">
    <h2>ID: {id}</h2>
    <h4>Name: {name}</h4>
    <div className="friend-age">
      Age:
      <em>{age}</em>
    </div>
    <div className="friend-email">
      email:
      <em>{email}</em>
    </div>
  </div>);
}
