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
      friends: [],
      name: '',
      age: '',
      email: '',
    }
  };

  componentWillMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() => ({ friends: [...response.data] }));
    })
    .catch(err =>{console.error(err)});

    // axios.post('http://localhost:5000/', {
    //   name: '',
    //   age: '',
    //   email:''
    //   })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render(){ 
    return (
      <div>
        <Friends friendData={this.state.friends}/>
        <Form  />      
        <Button />  
      </div>
    )
  }
}

export default App;
