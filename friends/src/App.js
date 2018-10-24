import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends.js";

class App extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            friends: [],
        }
    }
    componentDidMount() {
        // this.setState((state)   =>  ({
        // }))
        fetch("http://localhost:5000/friends")
        .then( data =>  data.json())
        .then(data  =>  this.setState((state)   =>  ({
            friends: data
        })));
    }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
