import React from "react";
import axios from "axios";

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: 0,
        email: ""
      }
    };
  }

  handleAgeChange = e => {
    this.setState({ newFriend: { age: e.target.value } });
  };


    handleEmailChange = e => {
    this.setState({ newFriend: { email: e.target.value } });
  };

  handleNameChange = e => {
    this.setState({ newFriend: { name: e.target.value } });
  };



  handleSubmit = e => {
    e.preventDefault();

    const addFriend = {
      newFriend: this.state.newFriend
    };

    axios
      .post("http://localhost:5000/friends", addFriend.newFriend)
      .then(result => console.log(result.data));
  };
  
  handleDelete = e => {
    
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(x => this.setState({ friends: x.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/friends")
      .then(x => this.setState({ friends: x.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <div>{friend.name + ", " + friend.age}<br/>{friend.email}<br/><button type="button">Delete</button><button type="button">Change</button></div>
        ))}
        <div><br />
        <form onSubmit={this.handleSubmit}>
          <label>
            New friend's name:<br />
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label><br /> 
          <label>
            Age:<br />
            <input type="text" name="age" onChange={this.handleAgeChange} />
          </label><br />
          <label>
            Email:<br />
            <input type="text" name="email" onChange={this.handleEmailChange} />
          </label><br />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}
