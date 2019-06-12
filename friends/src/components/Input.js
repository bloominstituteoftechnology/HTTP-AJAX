//Input

import React from 'react';
import { Link } from 'react-router-dom';

class Input extends React.Component {
constructor(props){
  super(props);
  this.state = {
    profile: {
    name: '',
    age: '',
    email: ''
  }
  }
}

handleChange = event => {
  this.setState({profile: { ...this.state.profile, [event.target.name]: event.target.value}})
}

postFriend = e => {
  e.preventDefault();
  this.props.postFriend(this.state.profile);
}

  render(){
  return(
    <div>
      <Link to="/">Home</Link>
        <form
        onSubmit={this.postFriend}
        >
          <h2>Name</h2>
          <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.profile.name}
          />
            <h2>Age</h2>
            <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.profile.age}
            />
          <h2>Email</h2>
          <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.profile.email}
          />
        </form>
      <button onClick={this.postFriend}>enter</button>
    </div>
  );
}
}
export default Input;
