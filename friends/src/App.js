import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      items: [],        
      newFriend: {
        name:'',
        age:'',
        email:''
      }
    };
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.log(error))
  }
  changeHandler() {
    
  }
  render() {
    return (
      <div className='friends-container'>
        <h1>Contact Information</h1>
        <input></input>
        <input></input>
        <button></button>        
        {this.state.items.map(item => 
          <div key={item.id} className='friend-card'>
            <h2>{item.name}</h2>
            <p>{item.age}</p>
            <p>{item.email}</p>
          </div>          
        )}
      </div>
    );
  }
}

export default App;
