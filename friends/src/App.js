import React, { Component } from 'react';
import './App.css';
import { NewFriend, Hello, ListFriends } from './components';
import { Route, Link } from 'react-router-dom';
//import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: []
    }
  }

  /*componentDidMount() {
    axios.get('http://localhost:5000/friends')
  .then( response => this.setState({friends:response.data}));
  }*/

  render() {
    return (
      <div className="App">
      <h1>I am App</h1>
      {/*<ListFriends friends={this.state.friends} />*/}

      {/*<ul>{this.state.friends.map(function(friend, index) {
      return <li key={index}>{friend.name}</li>;})}*/}

      {/*<ul>{this.state.friends.map((friend, index) =>
      <li key={index}>{friend.name}</li>)}</ul>*/}

      {/*<ul>{this.state.friends.map((friend, index) => <ListFriends
      friend={friend} />)}</ul>*/}

      {/*<NewFriend Newfriend={this.state.friends} />*/}

      <Link to="/">Add New Friends</Link>
      <Link to="/ListFriends">List of Friends</Link>
      <Link to="/Hello">Hello Friend</Link>
      <Route exact path="/" component={NewFriend}></Route>
      <Route path="/ListFriends" component={ListFriends}></Route>
      <Route path="/Hello" component={Hello}></Route>

      </div>
    );
  }
}

export default App;
