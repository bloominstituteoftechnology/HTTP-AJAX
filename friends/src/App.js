import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom'

const url= 'http://localhost:5000/friends'

const Friends = (props) => {
  return (
    <div>

    </div>
  )
}

const addAFriend = props => {
  return(
    <form action="">

    </form>
  )
}



class App extends Component {

  constructor() {
    super();
    this.state={
      friends: [],
      // loading: true
    }
  }


  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friends: response.data.data.results
      });
    })
    .catch(err => console.log (err));
  }








  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
