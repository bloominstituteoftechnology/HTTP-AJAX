import React from 'react'
import axios from 'axios'

class FriendInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    if (prevProps !== this.props && this.props.currentFriendId > 0) {
      axios.get(`http://localhost:5000/friends/${this.props.currentFriendId}`)
        .then((response) => {
          this.setState(response.data);
        })
        .catch((error) => {
          console.log(`There was an error retrieving Friend: ${error}`);
        });
    }
    if (prevProps.currentFriendId > 0 && this.props.currentFriendId < 0) {
      this.setState({ name: '', age: '', email: '' });
    }
  }

  addFriend = (event) => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    if (this.props.currentFriendId > 0) {
      axios.put(`http://localhost:5000/friends/${this.props.currentFriendId}`, newFriend)
        .then((response) => {
          console.log(`Friend updated. Response: ${response}`);
          this.props.refreshFriends();
        })
        .catch((error) => {
          console.log(`There was an error updating Friend: ${error}`)
        })
    } else {
      axios.post('http://localhost:5000/friends/', newFriend)
        .then(response => {
          this.setState({ name: '', age: '', email: '' });
          this.props.refreshFriends();
        })
        .catch(error => {
          console.log(`There was an error adding Friend: ${error}`);
        });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitLabel() {
    if (this.props.currentFriendId > 0) {
      return 'Update Friend';
    } else {
      return 'Create Friend';
    }
  }

  render() {
    return (
      <form className='friend-input' onSubmit={this.addFriend}>
        <label>Name:</label> <input type='text' name='name' placeholder='Name' onChange={this.handleInputChange} value={this.state.name} />
        <label>Age:</label> <input type='number' name='age' placeholder='Age' onChange={this.handleInputChange} value={this.state.age} />
        <label>Email:</label> <input type='text' name='email' placeholder='Email' onChange={this.handleInputChange} value={this.state.email} />
        <button className='add-friend' type='submit'>{this.submitLabel()}</button>
      </form>
    )
  }
}

export default FriendInput;