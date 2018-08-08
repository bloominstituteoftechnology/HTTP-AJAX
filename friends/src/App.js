import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FriendsContainer from './components/FriendsContainer';
import { NavLink, Route, Switch } from 'react-router-dom'
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
      <div>
        <Route path="/" 
          render={props => <FriendsContainer {...props} friends={this.state.friends} />}
        />
        <Route to="/add" render={props => <NewFriendComponent {...props} />}/>
      </div>
    );
  }
}

export default App;
