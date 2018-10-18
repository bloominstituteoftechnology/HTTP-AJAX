import React from "react";
import axios from "axios";
import "./FriendsList.css";

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      isEditing: false
    };
  }

  showDropdown = (e, id) => {
    e.preventDefault();
    this.setState({
      showDropdown: !this.state.showDropdown,
      isEditing: !this.state.isEditing
    });
  };

  updateFriend = (e, id) => {
    e.preventDefault();
    const updatedInfo = {};
    //  if()
    console.log(id);
    axios
      .put(`http://localhost:5000/friends/${id}`, this.props.friends)
      .then(response => {
        this.setState = {[this.props.friends]: response.data};
      });
  };

  updateHandler = (e, id) => {
    console.log(id, e.target.value);
  };

  render() {
    return (
      <div>
        {/* <h2>My Friends</h2> */}
        <div className="my-friends">
          {this.props.friends.map(friend => {
            return (
              <div key={friend.id} className="friend">
                {!this.state.isEditing ? (
                  <div>
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
                  </div>
                ) : (
                  <div>
                    <form
                      action=""
                      className="edit-mode"
                      //   onSubmit={e => this.updateFriend(e, friend.id)}
                    >
                      <h4>Update Info</h4>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        placeholder={friend.name}
                        value={this.props.newFriend.name}
                        onChange={() => this.updateHandler(friend.id)}
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        placeholder={friend.age}
                        value={this.props.newFriend.age}
                        onChange={this.changeHandler}
                      />
                      <br />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        placeholder={friend.email}
                        value={this.props.newFriend.email}
                        onChange={() => this.props.changeHandler(friend.email)}
                      />
                      <br />
                      <button
                        onClick={e => this.showDropdown(e, friend.id)}
                        className="cancel"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={e => this.updateFriend(e, friend.id)}
                        className="accept"
                      >
                        Accept
                      </button>
                    </form>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FriendCard;
