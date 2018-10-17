import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList'
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err));
  }

  changeHandler = event => {
    this.setState({newFriend: {
                    ...this.state.newFriend,
                    [event.target.name]: event.target.value
    }})
  }


  render() {
    return (
      <div className="App">
        <header>Look at all my shiny friends!</header>
        <FriendList friendArr={this.state.friends}/>
        <AddFriendForm newFriend={this.state.newFriend} changeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;
