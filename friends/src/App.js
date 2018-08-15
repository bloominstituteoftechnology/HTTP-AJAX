import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/friends';
import axios from 'axios';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor(){
    super();
    this.state = {
       friendsList: [],
    }
  }
  
  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friendsList: response.friends  
      })
    })
  }


  render() {
    return (
      <div className="App">
        component with list of friends will be displayed here
        <Friends friends={this.state.friendsList}/> 
      </div>
    );
  }
}

export default App;
