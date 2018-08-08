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

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props=> <FriendList {...props} friends={this.state.friends} loading={this.state.isLoading} />} />
        <Route path="/new" component={FriendForm} />
      </div>
    );
  }
}

export default App;
