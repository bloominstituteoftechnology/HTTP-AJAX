import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends'
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
    // console.log(this.state.friends)
    return (
      <div className="App">
      <form className='form' action="">
        <input className='field' type="text"></input>
        <input className='field' type="text"></input>
      </form>
        <section className="Friends">
        <Friends friends={this.state.friends} />
        </section>
      </div>
    );
  }
}

export default App;
