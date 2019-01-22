import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar/NavBar';
import FriendForm from './Components/FriendForm/FriendForm'
import Friend from './Components/Friend';



class App extends Component {
  constructor(){
    super();
    this.state= {
      friends:[]
    };
  }

  // I don't know how the best way is  to refresh this information without keeping state in two different places
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((result)=>{
      // console.log(result);
      this.setState({friends: result.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/friends" render={props=> <FriendsList friends={this.state.friends}  {...props}/>} />
        <Route path="/friends/:id" render={props=> <Friend friends={this.state.friends}  {...props}/>} />
        <Route path="/addfriend" component={FriendForm} />
      </div>
    );
  }
}

export default App;
