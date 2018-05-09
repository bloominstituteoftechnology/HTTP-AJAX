import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [{name:"Cass"}]
    }
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({friends:response.data})
      })
      .catch(err => {
         //if something goes wrong, we handle any errors here
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.state.friends.map(friend => {
          return <Friend friend={friend}/>
        })}
      </div>
    );
  }
}

export default App;
