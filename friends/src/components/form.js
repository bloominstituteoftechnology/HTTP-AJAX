import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    'name': '',
    'age': '',
    'email': '',
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div style={{border: '3px solid black', padding: '20px', height: '75px', margin: '-3px 0 0 0'}}>
        <form action="" onSubmit={this.onSubmit}>
          <input type="name" 
            name="name" 
            value={name} 
            placeholder="Name" 
            onChange={this.handleChange}
            /> <br/>
          <input 
            type="number" 
            name="age" 
            value={age} 
            placeholder="Age"
            onChange={this.handleChange}
            /> <br/>
          <input 
            type="email" 
            name="email" 
            value={email} 
            placeholder="Email"
            onChange={this.handleChange}
          /> <br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    ) // return
  } // render()

  handleChange = (event) => {
    let {name, value} = event.target;

    if (event.target.type === 'number') {
      value = Number(value);
    }
    
    this.setState({[name]: value});
    console.log(this.state);
  }

  onSubmit = (event) => {
    // event.preventDefault();
    let { name, age, email } = this.state;
    axios
    .post('http://localhost:5000/friends', {name, age, email})
    .then((response) => {console.log(`Response: ${response}`)})
    .catch((error) => {console.log(`Error: ${error}`)});
  }
} // Form component

export default Form;