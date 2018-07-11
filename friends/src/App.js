import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
    console.log(response);
    this.setState({friends: response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          {this.state.friends.map(item => {
            return <p key={item.id}>{item.name} <br /> {item.age} <br /> {item.email} <br /></p>
          })}
  
      </div>
    );
  }
}

export default App;
