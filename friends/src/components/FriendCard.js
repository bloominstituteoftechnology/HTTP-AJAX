import React from "react";
import "./FriendsList.css";

import FriendsList from "./FriendsList";

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "",
      age: "",
      email: ""
    };
  }

  toggleEdit = (e, id) => {
    e.preventDefault();
    this.setState(prevState => {
      return {isEditing: !prevState.isEditing};
    });
  };

  updateHandler = e => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  helper = e => {
    e.preventDefault();
    const {name, age, email} = this.state;
    const updatedInfo = {name, age, email};

    this.props.updateFriend(this.props.friend.id, updatedInfo);
    this.setState(prevState => {
      return {isEditing: !prevState.isEditing};
    });
  };

  render() {
    const {friend} = this.props;
    return (
      <div>
        <div>
          <div className="friend">
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
                  onClick={this.toggleEdit}
                />
              </div>
            ) : (
              <div>
                <form className="edit-mode" onSubmit={e => this.helper(e)}>
                  <h4>
                    {`Update ${friend.name}'s Info`}{" "}
                    <i className="fas fa-pencil-alt" />
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder={friend.name}
                    value={this.state.name}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="text"
                    name="age"
                    placeholder={friend.age}
                    value={this.state.age}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder={friend.email}
                    value={this.state.email}
                    onChange={this.updateHandler}
                  />
                  <br />

                  <button className="accept" type="submit">
                    Accept
                  </button>
                  <button onClick={this.toggleEdit} className="cancel">
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FriendCard;
