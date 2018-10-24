import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends.js";
import axios from 'axios';

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
        axios.get("http://localhost:5000/friends")
        .then(data  =>  this.setState((state)   =>  ({
            friends: data.data
        })))
        .catch(err  =>  {
            console.log("In Catch", err);
        });
    }
  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
