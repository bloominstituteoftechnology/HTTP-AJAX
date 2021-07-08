import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList.js';
import NewFriendForm from './components/NewFriendForm.js';
import axios from 'axios';
import './components/Friends.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: [],
        newFriend: {
            name: '',
            age: '',
            email: '',
        }
    };
}
  
  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
            
        })
        .catch(err => console.log(err));
}

handleNewFriendInput = event => {
    this.setState({ 
        newFriend: {
            ...this.state.newFriend,
            [event.target.name] : event.target.value 
        }
    });
}

addNewFriend = event => {
    event.preventDefault();
    axios
        .post('http://localhost:5000/friends', this.state.newFriend )
        .then(response => {
            console.log(response.data);
            this.setState({ 
                friends: response.data, 
                newFriend: {
                    ...this.state.newFriend,
                    newFriendName: '', 
                    newFriendAge: '', 
                    newFriendEmail: '',
                }
            });
        })
        .catch(err => console.log(err));
       
    
}

  render() {
    return (
      <div>
        <NewFriendForm 
          newFriendName={this.state.newFriendName}
          newFriendAge={this.state.newFriendAge}
          newFriendEmail={this.state.newFriendEmail}
          handleNewFriendInput={this.handleNewFriendInput}
          addNewFriend={this.addNewFriend}
        />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
