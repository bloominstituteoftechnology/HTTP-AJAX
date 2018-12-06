import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component{
  state = {
    name: '',
  };

  handleChange = ev => {
    this.setState({ name: ev.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    }

    axios.post('http://localhost:5000/friends', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    axios.put('http://localhost:5000/friends', { user })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person name:
          <input type='text' name='name' onChange={this.handleChange} />
        </label>
        <button type='submit'>Add Friend</button>
      </form>
    )
  }
}

export default FriendsForm;
