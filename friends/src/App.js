import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/Friends/FriendsList';
import FriendForm from './components/Friends/FriendForm';

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        friends:[]
      };

}
componentDidMount() {
  axios
    .get("http://localhost:5000/friends")
    .then(response => this.setState({ friends: response.data }))
    .catch(err => {console.log(err)});
}

addFriend = (newFriend) => {
  axios
    .post("http://localhost:5000/friends", newFriend)
    .then(res => this.setState({ friends: res.data }, this.props.history.push('/')))
    .catch(err => {console.log(err)});
}
  render() {
    return (
      <div className="App">
       <Route exact path="/" render={()=> <FriendsList friendData={this.state.friends} />} />
       <Route path="/add-friend" render={(props) => <FriendForm friends={this.state.friends}  />} />
      </div>
    );
  }
}
