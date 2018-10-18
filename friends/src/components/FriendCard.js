import React from "react";
import "./FriendsList.css";

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      updateInfo: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  toggleEdit = (e, id) => {
    e.preventDefault();
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  updateHandler = e => {
    this.setState({
      updateInfo: {[e.target.name]: e.target.value}
    });
  };

  render() {
    const {friend} = this.props;
    return (
      <div>
        <div>
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
                  onClick={this.toggleEdit}
                />
              </div>
            ) : (
              <div>
                <form
                  action=""
                  className="edit-mode"
                  //   onSubmit={e => this.updateFriend(e, friend.id)}
                >
                  <h4>
                    {`Update ${friend.name}'s Info`}{" "}
                    <i className="fas fa-pencil-alt" />
                  </h4>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    placeholder={friend.name}
                    value={this.state.updateInfo.name}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    placeholder={friend.age}
                    value={this.state.updateInfo.age}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    placeholder={friend.email}
                    value={this.state.updateInfo.email}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <button
                    onClick={e => this.toggleEdit(e, friend.id)}
                    className="cancel"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={e => this.props.updateFriend(e, friend.id)}
                    className="accept"
                    type="submit"
                  >
                    Accept
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
