import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from '../node_modules/axios'

class App extends Component {

  constructor() {
    super();
    this.state = {

      friends: []
    }
  }

  componentDidMount() {
        axios
        .get("http://localhost:5000/friends")
        .then (response => {this.setState({
          friends: response.data})
       })
        .catch (err => console.log(err));
    }
  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <section className="Friends">
         {this.state.friends}
        </section>
      </div>
    );
  }
}

export default App;
