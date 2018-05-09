import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  };

  componentWillMount(){
    axios.get('http://localhost:5000/friends')
    .then(repsone => {this.setState(() => ({friends:Response.data}))})
    .catch(err => {console.error(err)});
  }

  render(){ 
    return (
      <div>
        <Friends friendsData={this.state.friends}/>
      </div>
    )
  }
}

export default App;
