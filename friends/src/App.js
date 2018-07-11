import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import ListOfFriends from './component/ListOfFriends';
import FriendForm from './component/FriendForm';
import Navigation from './component/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    }
  }
  
  // GET request
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        let friends = [];
        friends = friends.concat(res.data);
        this.setState({ friends });
      })
      .catch(err => {
        console.log(err)
      }
    )
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value});
  };  

  deleteFriend = (id) => {
    let friends = [];
    friends = friends.concat(this.state.friends);
    friends.forEach(friend => {
      if (friend.id === id) {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(deletedNote => {
          console.log('Deleted');
        })
        .catch(err => {
          console.log(err);
        });
      }
    })
  };

  // saveNoteData = () => {
  //   const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
  //   axios
  //     .post(`http://localhost:5000/friends`, friend)
  //     .then(savedNote => {
  //       console.log(savedNote);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   this.setState({ name: '', age: '', email: ''});
  // };
    
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route 
          exact path='/' 
          render={(props) => (
          <ListOfFriends {...props} friends={ this.state.friends } deleteFriend={ this.deleteFriend }/>
        )}/>

        <Route path ='/form' component = { FriendForm } />
      </div>
    );
  }
}

export default App;
