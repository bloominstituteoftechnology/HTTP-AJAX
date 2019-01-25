import React from 'react';

import { Route } from 'react-router-dom';


class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend)
  }

  putFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend, this.props.id)
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input 
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          {this.props.create ? <button onClick={this.postFriend}>Create</button> : <button onClick={this.putFriend}>Update</button>}
           
          
        </form>
      </div>
    )
  }
}

export default NewFriendForm;