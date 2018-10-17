import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      items: [],        
      name:'',
      age:'',
      email:''
      
    };
  }
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.log(error))
  }
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  clickHandler = event => {
    
  }
  render() {
    return (
      <div className='friends-container'>
        <h1>Contact Information</h1>
        <input 
          name='name' 
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleInputChange}></input>
        <input 
          name='age' 
          value={this.state.age}
          placeholder='Age'
          onChange={this.handleInputChange}></input>
        <input 
          name='email' 
          value={this.state.email}
          placeholder='Email'
          onChange={this.handleInputChange}></input>
        <button>Add a Contact</button>        
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
