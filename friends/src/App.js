import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      items: [],
      name: '',
      age: '',
      email: ''
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
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.setState({ name: "", age: "", email: "" });
    window.location.reload();
  };

  render() {
    return (
      <div className='contact-container'>
        <h1>Contact Information</h1>

        <div className='cards'>
          {this.state.items.map(item => 
            <div key={item.id} className='contact-card'>
              <h2>{item.name}</h2>
              <p>Age:{item.age}</p>
              <p>Email:{item.email}</p>
            </div>          
          )}
          <form className='form'>
          <h3>Add a contact</h3>
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
          <button onClick={this.clickHandler}>Submit</button>
        </form>  
        </div>
      </div>
    );
  }
}

export default App;
