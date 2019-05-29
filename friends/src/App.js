import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/FriendsList';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

componentDidMount(){
  axios
    .get("http://localhost:5000/friends")
    .then(res => this.setState({friends: res}))
    .catch(err => console.log(err))
}

  render(){
  return (
    <div className="App">
      <Route path="/" render={(props)=>(<Friends
        {...props}
        friends={this.state.friends}
      />)}/>
    </div>
  );
}
}

export default App;
