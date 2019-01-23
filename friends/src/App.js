import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

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
        .then(response => {
          console.log(response.data)
          this.setState({friends: response.data})
        })
        .catch( err => {
          console.log(err)
        })
      }

  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        {this.state.friends.map( d => {
          return (
            <div key={d.id}>
              <ul>
                <li>{d.name}</li>
                <li>{d.age}</li>
                <li>{d.email}</li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
