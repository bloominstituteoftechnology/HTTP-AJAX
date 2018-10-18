import React from "react";
import axios from "axios";
import "./FriendsList.css";

import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
      // showDropdown: false
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({friends: response.data});
      })
      .catch(err => console.log(err));
  };

  changeHandler = e => {
    this.setState({
      newFriend: {...this.state.newFriend, [e.target.name]: e.target.value}
    });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({friends: response.data}));
    this.setState({newFriend: {name: "", age: "", email: ""}});
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState({friends: response.data});
    });
  };

  render() {
    return (
      <div className="friends-list">
        <FriendCard
          friends={this.state.friends}
          newFriend={this.state.newFriend}
          deleteFriend={this.deleteFriend}
          changeHandler={this.changeHandler}
        />
        {/* <div>
          <h2>My Friends</h2>
          <div className="my-friends">
            {this.state.friends.map(friend => {
              return (
                <div key={friend.id} className="friend">
                  <h2>{friend.name}</h2>
                  <p>{`${friend.age} years old`}</p>
                  <p>{friend.email}</p>
                  <i
                    className="fas fa-times"
                    onClick={e => this.deleteFriend(e, friend.id)}
                    title="Delete"
                  />
                  <i
                    className="fas fa-user-edit"
                    title="Edit info"
                    onClick={() => this.showDropdown(friend.id)}
                  />
                  {this.state.showDropdown ? (
                    <form
                      action=""
                      className="dropdown"
                      onSubmit={e => this.updateFriend(e, friend.id)}
                    >
                      <h4>Update Info</h4>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.changeHandler}
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.changeHandler}
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={() => this.changeHandler(friend.email)}
                      />
                      <br />
                      <i
                        className="fas fa-check"
                        onClick={() => this.updateFriend(friend.id)}
                      />
                    </form>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div> */}

        <form action="" className="add-friend">
          <h3>Add A New Friend</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
          />
          <br />
          <button onClick={this.addNewFriend}>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
