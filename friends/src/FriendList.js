import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend.js";
import { Link } from "react-router-dom";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
        name: '',
        age: '',
        email: ''
    };
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value,
    })
};

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }


  
  editFriend = (id) => {
    // event.preventDefault();
    console.log(id);
    const updatedFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
      .then(response => {console.log(response.data);
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <div>
        <Link to="/">
          <div className="friend-list">
            {this.state.friends.map(friend => (
              <Friend
                handleChange={this.handleChange}
                editFriend={this.editFriend}
                deleteMethod={this.deleteFriend}
                friend={friend}
                key={friend.id}
              />
            ))}
          </div>
        </Link>
        {/* <button onClick={() => this.editFriend()}>Edit</button> */}
    </div>
    );
  }
}
