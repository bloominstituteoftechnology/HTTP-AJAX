import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend';
import NewFriend from './NewFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriendInfo: []
    }
  }

componentDidMount() {
  axios
    .get('http://localhost:5000/friends')
    .then(response=> {
      console.log(response);
      this.setState({friends: response.data});
    })
    .catch(err=> {
      console.log(err);
    });
}

  render() {
    return (
      <div className="App">
       <h1>Friends</h1>
       <NewFriend 
          value={this.state.inputText}
          addNewFriend={this.addNewFriend}
        />
       <div className='friends'>
       {this.state.friends.map(friend=> {
         return <Friend friend={friend} key={friend.id}/>
       })}
       </div>
      </div>
    );
  }
}

export default App;
