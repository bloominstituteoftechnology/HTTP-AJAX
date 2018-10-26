import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './CSS/Body.css'

import axios from 'axios';

import FriendTable from './Components/FriendTable';
import NewFriendForm from './Components/NewFriendForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friendsArray : [
      ]
    }
  }
  componentWillMount(){
    axios
      .get('http://localhost:5000/friends')
        .then(response =>{
          this.setState({friendsArray : response.data})
      })
      .catch(error =>{
        console.log(error);
      })
  }
    //submitHandler should be passed to FriendForm and post a new instance of data to the url in post method
  addFriend = (newFriend) =>{
    //prevents the page from reloading at the point of the event which in this case would be the form in NewFriendForm
    
    //will post incoming data from form to our outside server
    axios
      .post('http://localhost:5000/friends', newFriend)
        .then(response =>{
          this.setState({friendsArray : response.data})
      })
      .catch(error =>{
        console.log(error);
      })
  }

  deleteFriend = (id) =>{
    
    axios
      .delete(`http://localhost:5000/friends/${id}`)
        .then(response =>{
          this.setState({friendsArray : response.data})
        })
        .catch(error =>{
          console.log(error);
        })
        
  }


  render() {
    return (
      <div className="app-body">
       <NewFriendForm addFriend = {this.addFriend}/>
       <FriendTable friends = {this.state.friendsArray} deleteFriend = {this.deleteFriend}/>
       
      </div>
    );
  }
}

export default App;
