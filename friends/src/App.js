import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Display from './components/Display';
import NewFriend from './components/NewFriend';
import Loading from './components/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(result => {
      setTimeout(() => {
        this.setState({ friends: result.data })
      }, 1000)
    })
    .catch(err => console.log(err));
  }

  handleAddNewFriends = () => {
    console.log('firing')
    axios.post('http://localhost:5000/friends', this.state.newFriend )
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(err => console.log(err));
  }

  stateNewFriend = (event, newFriend) => {
    event.preventDefault();
    this.setState({newFriend}, () => {this.handleAddNewFriends()});
  }

  render() {
    return (
      <div className="App">
        
        {this.state.friends.length === 0 ? <Loading />: <Display friends={this.state.friends} /> }
        <NewFriend
          stateNewFriend = {this.stateNewFriend}
        />
      </div>
    );
  }
}

export default App;
