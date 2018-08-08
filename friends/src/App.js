import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FriendsContainer from './components/FriendsContainer';
import { NavLink, Route } from 'react-router-dom'
import NewFriendComponent from './components/NewFriendComponent';

class App extends Component {

  constructor (){
    super()
    this.state = {
      friends: [],
      lodaded: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => {
        const data = res.data
        this.setState({
          friends: data,
          lodaded: true
        })
      })
  }

  openForm (){
    
  }

  render() {
    if (!this.state.lodaded) 
      return (
        <h1>Loading...</h1>
      )

    return (
      <div className="App">
        <div className="header">
          <h1>Friends List</h1>
          <NavLink to="/addFriends"><button>Add Frineds</button></NavLink>
        </div>
        <FriendsContainer friends={this.state.friends} />
        <Route to="/addFriend" component={NewFriendComponent} />
      </div>
      
    );
  }
}

export default App;
