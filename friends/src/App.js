// React and axios imports
import React, { Component } from 'react';
import axios from 'axios';
// Components imports
import FriendCard from './component/FriendCard';
// Import CSS file
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [], //Array of friends objects
      friend: {
        // friend State to hold the new friends information
        name: '',
        age: '',
        email: ''
      },
      editing: false,
      editingId: null
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends') // Grabs friends array from server.
      .then(response => {
        const friends = response.data; // Sets the data received from response as a variable called friends
        this.setState({ friends });
      }) // Sets friends state to the array grabbed on line 15
      .catch(error => console.log('Failed CDM', error)); // If there is an error console logs error
  }
  // Handles the change on the input to update the friend state
  onChangeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };
  // Checks the state of the friend state and will use .post to add to the server when name, age, and email of friend is filled out, then sets the state of friend back to empty.
  addFriend = e => {
    e.preventDefault();
    // Checks if all the information needed is present within the state.
    if (
      this.state.friend.name &&
      this.state.friend.age &&
      this.state.friend.email
    ) {
      // Will push the friend into the friends array in the server
      axios
        .post('http://localhost:5000/friends', this.state.friend)
        .then(response => this.setState({ friends: response.data }))
        .catch(error => console.log('Error could not add friend', error));
      // Resets information typed in after added the friend
      this.setState({
        friend: {
          name: '',
          age: '',
          email: ''
        }
      });
    } else {
      // Will alert user if more information is needed to be filled out
      alert('Missing Information');
    }
  };
  // Removed the friend that was clicked on
  removeFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };
  // Sets the form to edit friend
  isEditing = (e, id, friend) => {
    e.preventDefault();
    this.setState({
      editing: true,
      editingId: id,
      friend: {
        name: friend.name,
        age: friend.age,
        email: friend.email
      }
    });
  };
  // Will update the friends information
  updateFriend = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.friend
      )
      .then(response => this.setState({ friends: response.data }));
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      },
      editing: false,
      editingId: null
    });
  };
  render() {
    return (
      <div className="App">
        {/* Form to add and update friends list */}
        <form className="friendInformationForm">
          <h2>{this.state.editing ? 'Update Friend' : 'Add Friend'}</h2>
          {/* Input for the name */}
          <input
            type="text"
            placeholder="Friend's Name..."
            name="name"
            autoComplete="off"
            value={this.state.friend.name}
            onChange={this.onChangeHandler}
          />
          {/* Input for the age */}
          <input
            type="text"
            placeholder="Friend's Age..."
            name="age"
            autoComplete="off"
            value={this.state.friend.age}
            onChange={this.onChangeHandler}
          />
          {/* Input for the email address */}
          <input
            type="text"
            placeholder="Friend's Email..."
            name="email"
            autoComplete="off"
            value={this.state.friend.email}
            onChange={this.onChangeHandler}
          />
          {/* Button will currently will add a friend */}
          <button
            onClick={!this.state.editing ? this.addFriend : this.updateFriend}
            className="addFriendButton">
            {!this.state.editing ? 'Add Friend' : 'Update Friend'}
          </button>
        </form>
        {/* Makes through friends array and generates a FriendCard component and passes individual friend down */}
        {this.state.friends.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              friend={friend}
              removeFriend={this.removeFriend}
              isEditing={this.isEditing}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
