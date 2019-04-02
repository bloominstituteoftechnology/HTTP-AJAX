import React, { Component } from 'react';
import axios from "axios";

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Friends List</h1>
        <div className="content">
          <form className="add-friend">
            <h4>Add a friend</h4>
            <div className='input-field'>
              <label for='name'>Name</label>
              <input id='name' />
            </div>
            <div className='input-field'>
              <label for='age'>Age</label>
              <input id='age' />
            </div>
            <div className='input-field'>
              <label for='email'>Email</label>
              <input id='email' />
            </div>
            <button type='submit'>Add Friend</button>
          </form>
          <div className="friends-list-wrapper">
            {this.state.friends.map(friend => <FriendsList key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
