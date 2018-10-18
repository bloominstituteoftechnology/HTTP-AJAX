import React from "react";
import axios from "axios";
import "./FriendsList.css";

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  showDropdown = () => {
    this.setState({showDropdown: !this.state.showDropdown});
  };

  updateFriend = (e, id) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState = {[this.props.friends]: response.data};
    });
  };

  render() {
    return (
      <div>
        <h2>My Friends</h2>
        <div className="my-friends">
          {this.props.friends.map(friend => {
            return (
              <div key={friend.id} className="friend">
                <h2>{friend.name}</h2>
                <p>{`${friend.age} years old`}</p>
                <p>{friend.email}</p>
                <i
                  className="fas fa-times"
                  onClick={e => this.props.deleteFriend(e, friend.id)}
                  title="Delete"
                />
                <i
                  className="fas fa-user-edit"
                  title="Edit info"
                  onClick={this.showDropdown}
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
                      value={this.props.newFriend.name}
                      onChange={this.changeHandler}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Age"
                      name="age"
                      value={this.props.newFriend.age}
                      onChange={this.changeHandler}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={this.props.newFriend.email}
                      onChange={() => this.props.changeHandler(friend.email)}
                    />
                    <br />
                    <i
                      className="fas fa-check"
                      onClick={() => this.props.updateFriend(friend.id)}
                    />
                  </form>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FriendCard;
