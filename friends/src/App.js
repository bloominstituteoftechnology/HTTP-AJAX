import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsForm from './components/FriendsForm.js'
import FriendsList from './components/FriendsList.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    console.log("Component did mount")
    axios.get("http://localhost:5000/friends/")
      .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
        <div className="right">
          <FriendsForm setAppState={this.setState.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;