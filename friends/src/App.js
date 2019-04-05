import React, { Component } from 'react';
import './App.css';
import Data from './data'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddFriendForm from './components/addFriendForm'

class App extends Component {
  constructor() {
    super();
    this.state={
        friends: []
    };
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
          this.setState({ friends: res.data });
      })
      .catch(err => {
          console.log(err);
      });
  };

  addFriend = newFriend => {
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        this.setState({ 
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Data friends={this.state.friends}/>
          <Link  to='/new-friend'><button>add Atlantian</button></Link>
          <Route exact  path="/new-friend" render={props => <AddFriendForm {...props} addFriend={this.addFriend} />}/>
        </div>
      </Router>
    );
  }
}

export default App;
