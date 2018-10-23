import React, { Component } from 'react';
import axios from 'axios';
import FriendLists from "./components/friendLists";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      friends:[]
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then( response => this.setState({
      friends: response.data
    }))
    .catch(err =>{console.log (err) })
  }

  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <FriendLists friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
