import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
  constructor(props) {
    super();
    this.state = {
      name:'',
      age: '',
      email: '',
      }
    this.oldState = props.state;

    this.addNewFriend = this.addNewFriend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    };

  render() {
    console.log(this.state);
    return (
      <form>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}/>
          </label>
          <br />
          <button onClick={this.addNewFriend}>Submit</button>
        </form>
    );
  }

  handleChange(event) {
    const target = event.target;

    if (target.name === 'name') return this.setState({name: target.value});
    if (target.name === 'age') return this.setState({age: target.value});
    if (target.name === 'email') return this.setState({email: target.value});
  }

  addNewFriend(event) {
    axios
    .post('http://localhost:5000/friends', this.state )  
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // event.preventDefault();
    // const target = event.target;

    // if (target.name === 'name') return this.setState({newName: target.value});
    // if (target.age === 'age') return this.setState({newAge: target.value});
    // if (target.email === 'email') return this.setState({newEmail: target.value});

  }

}

export default AddFriend;