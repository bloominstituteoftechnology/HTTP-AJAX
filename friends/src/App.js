import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then( response => {
        this.setState( () => ({ friends: response.data }))
      })
      .catch( error => {
        console.error( error );
      });
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.friends.map( (friend) => {
          return(
            <div>{friend.name}</div>
          )
        } )}
        </header>
      </div>
    );
  }
}

export default App;
