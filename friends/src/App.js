import React, { Component } from "react";
import axios from 'axios';
import Friendlist from './components/FriendList';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <header className='friends-header'>
          <h1>Friends App</h1>
          <h2>Bet no one told you life was gonna be this way...</h2>
          <h4>clap! clap! clap! clap!</h4>
        </header>
        <Friendlist data={this.state.data} />
      </div>
    );
  }
}

export default App;
