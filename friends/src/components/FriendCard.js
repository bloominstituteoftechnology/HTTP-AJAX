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
    console.log(e.target.value);
    this.setState({
      updateInfo: {...this.state.updateInfo, [e.target.name]: e.target.value}
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
                <form action="" className="edit-mode">
                  <h4>
                    {`Update ${friend.name}'s Info`}{" "}
                    <i className="fas fa-pencil-alt" />
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder={friend.name}
                    //   value={this.state.updateInfo.name}
                    value={this.state.updateInfo.name}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="text"
                    name="age"
                    placeholder={friend.age}
                    value={this.state.updateInfo.age}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder={friend.email}
                    value={this.state.updateInfo.email}
                    onChange={this.updateHandler}
                  />
                  <br />
                  <button onClick={this.toggleEdit} className="cancel">
                    Cancel
                  </button>
                  <button
                    onClick={e =>
                      this.props.updateFriend(
                        e,
                        friend.id,
                        this.state.updateInfo
                      )
                    }
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
