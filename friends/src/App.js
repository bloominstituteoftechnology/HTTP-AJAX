import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      friends: [],
    }
    
  };


addToFriends = friends => {
  const Friends = this.state.Friends;
  const findFriends = Friends.find(el => friends.id === el.id);
  Friends.push(friends);
  this.setState({ Friends });
};

render() {
  return (
    <div>
      <Friends list={this.State.Friends} />
      <Route exact path="/" component={FriendsList} />
    </div>
  );
}
}