import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './FriendList'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friendsData: response.data });
      }).catch(err =>{
        console.log(err);
      });
   }

   
   handleNameInput = e => {
     this.setState({ friend: e.target.value });
    }
    // you wouldn't put a post in your lifecycle method unless you wanted your data to be created automatically
    
  handleSubmitFriend = () => {
    const friend = { friend: this.state.friend };
    axios.post('http://localhost:5000/friends', friend)
      .then(response => {
        console.log("POST RESPONSE: ", response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Friends
        </header>
        <input 
          type="text"
          placeholder="Add friend"
          onChange={this.handleNameInput}
          name="friend"
          value={this.state.friend}
        />
        <button onClick={this.handleSubmitFriend}>Add friend</button>
        <FriendList friends={this.state.friendsData}/>
      </div>
    );
  }
}

export default App;
