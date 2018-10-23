import React from 'react';
import axios from 'axios';
import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(data => {
      console.log(data.data);
      this.setState({ friends: data.data });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <h1>Friends List:</h1>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.props.handleInput}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={this.props.handleInput}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.props.handleInput}
          />
          <button>Add Friend</button>
        </form>
        {this.state.friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
