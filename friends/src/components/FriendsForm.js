import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email:''
    }
  }

addFriend = event => {
  event.preventDefault()
  axios
    .post('http://localhost:5000/friends', this.state.friend)
    .then(res => {this.props.submitted()})
    .catch(err => console.log(err));
}

changeHandler = event => {
  this.setState({
    friend: {
      ...this.state.friend,
      [event.target.name]: event.target.value
    }
  })
}

  render() {
    return (
      <form>
        <input
          name="name"
          onChange={this.changeHandler}
          placeholder="Name"
          type="text"
          value={this.state.friend.name}
        />
        <input 
          name="age"
          onChange={this.changeHandler}
          placeholder="Age"
          type="text"
          value={this.state.friend.age}  
        />
        <input 
          name="email"
          onChange={this.changeHandler}
          placeholder="Email"
          type="text"
          value={this.state.friend.email}
        />
        <button onClick={this.addFriend} type="submit">Add Friend</button>
      </form>
    );
  }
}

export default FriendsForm;