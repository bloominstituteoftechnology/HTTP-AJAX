import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import FriendsList from './components/FriendsList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')  
      .then(response => {this.setState({ friends: response.data}) } //data defined?
      )
      //.then(response => console.log(response))
      .catch(err => {console.log(err)
      })
  };
//get takes string as parameter, ie a url. 
//axios creates promise
//put data you want on state.  response.data is the array of friends.

  

  addNewFriend = (newFriend) => {
    axios.post('http://localhost:5000/friends', newFriend)  //passing an obj as new post request
      .then(response => {
        //after request sent, axios gives us promise, THEN consumes promise
        //this.setState({ friends: response.data}) 
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
      
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log('delete-friend-event', e)
    console.log('delete-friend-id', id)
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
          this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="App">
        <h1 className="app-title">Friends</h1>
          <Form formSubmitHandler={this.addNewFriend} />
          <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
