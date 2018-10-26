import React, {Component} from 'react';
import axios from 'axios';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      formError: '',
      name: '',
      age: '',
      email: ''
    }
  }
  update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3020/friends/${this.props.id}`, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
      .then(res => this.props.updateFriends(res.data))
  }
  handleInputChange = (e) =>  {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
        <form onSubmit={this.update}>
          <h1>
            Edit A Friend
          </h1>
          <input type='text' name='name' placeholder='name'
                 onChange={this.handleInputChange}
                 value={this.state.name} required/>
               <input type='number' name='age' placeholder='age'
                onChange={this.handleInputChange}
                value={this.state.age} required/>
      <input type='text' name='email' placeholder='email'
             onChange={this.handleInputChange}
             value={this.state.email} required/>
          <button type='submit'>Save</button>
          <p>{this.state.formError}</p>
      </form>
    );
  }
}
