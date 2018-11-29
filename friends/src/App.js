import React, { Component } from "react";
import axios from 'axios';
import Friendlist from './components/FriendList';
import FriendForm from './components/FriendForm';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
        console.log(this.state.friends)
      })
      .catch(err => console.log(err));
  }

  addFriends = (response) => {
    this.setState({
      friends: response
    })
  }

  deleteFriendFromList = (response) => {
    this.setState({
      friends: response
    })
  }
  updateFriendList = (response) => {
    this.setState({
      friends: response
    })
  }
  render() {
    return (
      <div className="App">
        <header className='friends-header'>
          <NavLink className='NavLink' to='/'>Home</NavLink>
          <NavLink to='/friends' className='NavLink'>friends</NavLink>
          <h1>Friends App</h1>
          <h2>Bet no one told you life was gonna be this way...</h2>
          <h4>clap! clap! clap! clap!</h4>
        </header>
        <Route exact path='/friends'
          render={props =>
            <Friendlist
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              updateFriendList={this.updateFriendList}
              deleteFriendFromList={this.deleteFriendFromList}
            />
          }
        />
        <Route exact path='/'
          render={props =>
            <FriendForm
              {...props}
              addFriends={this.addFriends}
            />
          }

        />

      </div>
    );
  }
}

export default App;
