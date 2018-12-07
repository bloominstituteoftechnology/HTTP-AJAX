import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component{
  constructor(){
    super();
  this.state = {
      name: '',
      age: '',
      email:''
  };}

  handleChange = ev => {
    this.setState({
        ...this.state.newFriends,
        [ev.target.name]: ev.target.value
      });
  }

submitHandler = ev => {
  ev.preventDefault();
  this.props.addFriend(this.state);
  // this.props.history.push('/shop') <--if we have the Route and {...props} enabled on this component
}

  render(){
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.name}
            />

            <input
              type='text'
              name='age'
              placeholder='Age'
              onChange={this.handleChange}
              value={this.state.age}
            />

            <input
              type='text'
              name='email'
              placeholder='E-mail'
              onChange={this.handleChange}
              value={this.state.email}
            />
          <button type='submit'>Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendsForm;
