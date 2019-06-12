import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/FriendsList';
import { Route } from 'react-router-dom';
import Input from './components/Input';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: []
    }
  }

componentDidMount(){
  axios
    .get("http://localhost:5000/friends")
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err))
}

postFriend = info => {
  axios.post("http://localhost:5000/friends", info)
      .then(res => this.setState({newFriend: res.info}))
      .catch(err=>console.log(err))
}

  render(){
  return (
    <div className="App">
      <Route exact path="/" render={(props)=>(<Friends
        {...props}
        friends={this.state.friends}
      />)}/>
      <Route path="/login" render={(props)=>(<Input
        {...props}
        postFriend={this.postFriend}
      />)}/>
    </div>
  );
}
}

export default App;
