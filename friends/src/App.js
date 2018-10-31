import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      friends: [],
    }
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then( response => {
        this.setState({friends: response.data})
        console.log(this.state.friends)
      })
  }
	 
   render() {
    return (
      <div className="App">
        {this.state.friends.map( friends => {
          return (
          <Friends id={friends.id} name={friends.name} age={friends.age} email={friends.email} /> 
          )
        })
    
        }
      </div>
    );
  }
}
 export default App;