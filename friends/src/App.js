import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friends from './components/Friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    // fetch data from the api
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
      <h1 className="Header">Friends List</h1>
      <div>
        <div className="friends-cards centered scrollbar" id="content">
              <Friends friends={this.state.friends}/>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
