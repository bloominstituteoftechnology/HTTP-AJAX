import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Friends from './components/Friends';


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      name: ''
    };
  }

componentDidMount(){
  axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
}
  

  render() {
    return (
      <div className="App">
        <h1>New Friend?</h1>
        <br></br>
        <Form />
        <br></br>
        <div>{this.state.friends.map(each => <Friends data={each} />)}</div>
        
      </div>
    );
  }
}

 




export default App;
