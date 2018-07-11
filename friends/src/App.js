import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import ListOfFriends from './component/ListOfFriends';
import FriendForm from './component/FriendForm';
import Navigation from './component/Navigation';
import { EditForm } from './component/EditForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    }
  }
  
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value});
  };  

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

  // DELETE request
  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(deletedNote => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
  };

  // EDIT request
  editFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/:${id}`, friend)
      .then(editedFriend => {
        console.log("Edited: ", editedFriend);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', age: '', email: ''});
  };
    
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route 
          exact path='/' 
          render={(props) => (
            <ListOfFriends {...props} 
            friends={ this.state.friends } 
            deleteFriend={ this.deleteFriend }
            />
          )}
        />

        <Route path ='/form' component={ FriendForm }/>

        <Route path='/edit' component={ EditForm }/>
      </div>
    );
  }
}

export default App;
