import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsWrapper from './components/FriendsWrapper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friends:response.data}))
      .then( () => { console.log(this.state)})
  }

  render() {
    return (
      <div className="App">
        <FriendsWrapper />
      </div>
    );
  }
}

export default App;
