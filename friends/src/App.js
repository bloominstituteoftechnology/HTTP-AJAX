import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      friends:[]
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
  }
  render() {
    return (
      
    );
  }
}

export default App;
