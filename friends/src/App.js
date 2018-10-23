import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsList.js'
import Loading from './components/Loading.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){

    axios.get("http://localhost:5000/friends")
      .then(response =>{
        //create mock loading time of 2 seconds
        window.setTimeout(()=>{
          this.setState({
            friends: response.data
          })
        }, 2000)
      })
  }

  render(){
    const result = (!this.state.friends.length)
      ? <div><Loading /></div>
      : <div className="App">
          <FriendsList friends={this.state.friends}/>
        </div>

    return (
      result
    )
  }

}

export default App;
