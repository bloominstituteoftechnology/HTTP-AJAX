import React, { Component } from 'react';
import './App.css';
import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendList : [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => this.setState({friendList : response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <FriendsList friendList={this.state.friendList}/>
        <AddFriendForm />
      </div>
    );
  }
}

export default App;
