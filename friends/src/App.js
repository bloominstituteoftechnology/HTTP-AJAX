import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }




  render() {
    
    return (
      <div className="App Container">
        {this.state.friends.map(friend => {
          return(

            <div className="friend">
              <div>{friend.id}</div>
              <h1>{friend.name}</h1>
              <div>{friend.age}</div>
              <div>{friend.email}</div>              
            </div>

          );
        })}
      </div>
    );
  }
}

export default App;