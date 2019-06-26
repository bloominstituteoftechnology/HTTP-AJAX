import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import { Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  }


  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response =>  this.setState( {friends: response.data } ))
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <div>
        <Route 
          exact 
          path="/" 
          render={ (props) =>
          <FriendList {...props} data={this.state.friends} /> }
        />
      </div>
    );
  }
}

export default App;
