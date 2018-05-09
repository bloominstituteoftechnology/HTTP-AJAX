import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import './App.css';
import FriendCard from './FriendCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends/')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.friends.map((e, i) => {
          return <FriendCard name={e.name} age={e.age} mail={e.email} key={e.id} />
        })}
      </div>
    );
  }
}

export default App;