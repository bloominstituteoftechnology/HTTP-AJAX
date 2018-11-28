import React, { Component } from 'react';
import axios from 'axios';


export default class FriendForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      email:''
    }
  }

  handleChange = e => {
    if(e.target.name === 'name'){
      this.setState({name: e.target.value})
    }
    if(e.target.name === 'age'){
      this.setState({age: e.target.value})
    }
    if(e.target.name === 'email'){
      this.setState({email: e.target.value})
    }
  }

  


  render() {
    return (
      <div className="List">
        <form onSubmit={e =>{
          e.preventDefault();
          const newFriendObj = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
          }
          this.props.addToList(newFriendObj);
          

        }}>

        <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name} />
        <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age} />
        <input type='email' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />

        <button>Add Friend</button>

        </form>
      </div>
    );
  }
}