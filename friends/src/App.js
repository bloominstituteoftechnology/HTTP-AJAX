import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        // set our state with the new data
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
