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
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(result => {
      setTimeout(() => {
        this.setState({ friends: result.data })
      }, 800)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        
        {this.state.friends.length === 0 ? <Loading />: <Display friends={this.state.friends} /> }
        <NewFriend />
      </div>
    );
  }
}

export default App;
