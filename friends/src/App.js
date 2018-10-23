import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    friendData: [],
    name: '',
    age: '',
    email: '',
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends').then(response => {
        this.setState({ friendData: response.data});
      }).catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload, Mr. Spraul.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
