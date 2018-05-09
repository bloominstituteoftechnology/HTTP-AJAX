import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends'
import Form from './Form';
import Button from './Button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  };

  componentWillMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() => ({ friends: [...response.data] }));
    })
    .catch(err =>{console.error(err)});
  }

  render(){ 
    return (
      <div>
        <Friends friendData={this.state.friends}/>
        <Form />      
        <Button />  
      </div>
    )
  }
}

export default App;
