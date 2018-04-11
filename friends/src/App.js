import React, { Component } from 'react';
import FriendsDisplay from './Components/FriendsListDisplay/FriendsListDisplay';
import SubmitNewFriend from './Components/SubmitNewFriend/SubmitNewFriend';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Friend from './Components/Friend/Friend';
class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[],
      name: '',
      age: 0,
      email: ''
    }
  }
  addNewFriend = (event) => {

  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' render={(props) => <FriendsDisplay {...props} {...this.state}/>} />
          <Route path='/:id' render={(props) => <Friend {...props} friends = {...this.state.friends}/>}/>
        </header>
        <Route exact path='/' render={(props) => <SubmitNewFriend {...props}/>}/>
      </div>
    );
  }
}

export default App;
