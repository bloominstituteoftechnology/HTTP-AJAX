import React from 'react'
import axios from 'axios';

class AddFriend extends React.Component {
  state = {
      name: '',
      age: '',
      email: '',
  };

  handleInputChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const {name, age, email} = this.state;
      axios
      .post('http://localhost:5000/friends', { name, age, email })
      .then((result) => {
        console.log(result);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  removeFriend = id => {
    const newMovies = this.state.movies.filter(movie => {
      return movie.id !== id;
    });
    this.setState({ movies: newMovies });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Add Friend: </label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            name="age"
            placeholder="Age"
            type="text"
            value={age}
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            placeholder="Email Address"
            type="text"
            value={email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriend;