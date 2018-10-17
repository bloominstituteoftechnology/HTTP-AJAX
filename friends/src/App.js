import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import AddNewFriend from './Components/AddNewFriend';
import DisplayFriends from './Components/DisplayFriends';


class App extends Component {
  constructor() {
    super();
    this.state = {
   
      friends: [],
      newFriend:{
        name : '',
        age : 0,
        email:'',
      },
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  
  }

  onInputChange = e => {
    e.preventDefault();

     this.setState({ 
       newFriend: {
          ...this.state.newFriend,
         [e.target.name]: e.target.value,
        }
      });
  }

  addFriend = e => {

    e.preventDefault();

    axios 
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));

    this.setState({ 
      newFriend: {       
         name : '',
        age : 0,
        email:'',
       }
     });
  }
  render() {
    console.log(this.state.newFriend);
    return (
      <div className="App">

       <AddNewFriend onInputChange={this.onInputChange} addFriend={this.addFriend}
        newFriend={this.state.newFriend} />
      <h3> My Friends</h3>
      <DisplayFriends friends={this.state.friends} />    
       </div>
    );
  }
}

export default App;
