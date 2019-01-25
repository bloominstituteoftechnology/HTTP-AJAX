import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar/NavBar';
import FriendForm from './Components/FriendForm/FriendForm'

class App extends Component {
  constructor(){
    super();
    this.state= {
      friends:[]
    };
  }

  // I don't know how the best way is  to refresh this information without keeping state in two different places
  componentDidMount(){
   this.getFriendsData()
  }

 getFriendsData  = ()=>{
  axios.get('http://localhost:5000/friends')
  .then((result)=>{
    // console.log(result);
    this.setState({friends: result.data})
  })
 }

 submitNewFriend = friend =>{
  axios.post('http://localhost:5000/friends',friend)
  .then(response=>{
    console.log(response)
    this.setState({friends: response.data})
  })
  .catch(error=>console.log(error))
}

 editFriend = (friend,id) =>{
  axios.put(`http://localhost:5000/friends/${id}`,friend)
  .then(response=>{
    //I don't know why but even though state is updated i wont get the new list until I refresh.
    this.setState({friends: response.data})
  })
  .catch(error=>console.log(error))
}

deleteFriend = id =>{
  axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response=>{
    console.log(response)
    this.setState({friends: response.data})
  })
  .catch( error=>console.log(error))
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/friends" render={props=> <FriendsList friends={this.state.friends}  {...props} deleteFriend={this.deleteFriend} editFriend={this.editFriend} /> } />
        <Route path="/friends" render ={props=> <FriendForm submitHandler={this.submitNewFriend} />} />
      </div>
    );
  }
}

export default App;
