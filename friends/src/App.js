import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
          .then(res => {
            this.setState({ friends: res.data, isLoading: false });
          })
          .catch(err => {
            console.log(err);
          });
  }

  updateFriends = friends => {
    this.setState({friends});
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props=> <FriendList {...props} friends={this.state.friends} loading={this.state.isLoading} />} />
        <Route path="/new" render={props=> <FriendForm {...props} update={this.updateFriends} />} />
        <Route path="/update/:id" render={props => <FriendForm {...props} update={this.updateFriends} updating="true" />} />
      </div>
    );
  }
}

export default App;
