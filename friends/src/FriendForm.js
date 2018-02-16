import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input 
          type="text" 
          name="name"
          value={this.state.name} 
          onChange={this.handleInputChange} 
        />

        <label>Age</label>
        <input 
          type="number" 
          name="age"
          value={this.state.age} 
          onChange={this.handleInputChange} 
        />

        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={this.state.email} 
          onChange={this.handleInputChange}  
        />

        <button type="submit">Save Friend</button>
      </form>
    );
  }

  submitHandler = event => {
    event.preventDefault();
    
    axios
      .post('http://localhost:5000/friends', this.state)
      .then(response => {
        console.log('response from post', response);
      })
      .catch(error => {
        console.error('error saving the data');
      });
  };

  handleInputChange = event => {
    // const { name, value } = event.target; // destructuring

    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === 'number') {
      value = Number(value);
    }

    // const propName = 'age';

    // const o = {
    //   foo: 'bar',
    //   [propName]: 7
    // }

    this.setState({ [name]: value });
  };
}

export default FriendForm;
