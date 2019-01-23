import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor()  {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
       console.log("response:", response);
      this.setState({friends: response.data})
      })
      .catch( err => console.log("ERROR!!!"))
  }

  render() {
    return (
      <div className="App">
          {
            this.state.friends.map( friend => {
              return (
                <div>
                  <h4>{friend.id}. {friend.name}</h4>
                  <h4>Age: {friend.age}</h4>
                  <h4>Email: {friend.email}</h4>
                </div>
              )
            })
          }
      </div>
    );
  }
}

export default App;
