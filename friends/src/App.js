import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(response => this.setState({friends: response.data}))
         .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
      {
        this.state.friends.map((friend, i ) => {
          return <FriendList key={i} data={friend}  />
        })
      }
      </div>
    );
  }
}

export default App;