import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List'; 

const url = "http://localhost:5000/friends"

class App extends Component {
  constructor(){
    super(); 
    this.state={
      friend: []
    }
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      console.log(response);
      this.setState({
        friend: response.data
      })

    })
  }
  render() {
    return (
      <div className="friend-list">
      <List list={this.state.friend} />
      </div>
    );
  }
}

export default App;
