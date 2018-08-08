import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: 0,
      email: "",
      id: null
    }
  }
  addFriendHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        id: this.state.id
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  editInput = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form>
        Name: <input type="text" name="name" onChange={this.editInput}/>
        Age: <input type="number" name="age" placeholder="0" onChange={this.editInput}/>
        Email: <input type="email" name="email" onChange={this.editInput}/>
        id: <input type="number" name="id" placeholder="0" onChange={this.editInput}/>
        <button type="submit" onSubmit={this.addFriendHandler}>Add Friend</button>
      </form>
    );
  }
}

export default Form;
