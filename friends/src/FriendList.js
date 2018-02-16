import React from 'react';
import PropTypes from 'prop-types';

class Friend extends React.Component {
  state = {
    editing: false,
    friendName: '',
  };

  render() {
    const friend = this.props.friend;
    const editing = this.state.editing;

    return (
      <li>
        <button
          onClick={() => {
            this.props.onDelete(friend.id);
          }}
        >
          X
        </button>
        {editing === true ? (
          <div>
            <input
              type="text"
              value={this.state.friendName}
              onChange={this.handleNameChange}
            />
            <button className="save-btn" onClick={this.updateFriend}>
              Save
            </button>
          </div>
        ) : (
          <div onClick={this.toggleEditing} style={{ flex: '1' }}>
            {friend.name}
          </div>
        )}
      </li>
    );
  }

  componentDidMount() {
    this.setState({ friendName: this.props.friend.name });
  }

  handleNameChange = event => {
    const value = event.target.value;

    this.setState({ friendName: value });
  };

  updateFriend = () => {
    const newFriend = { ...this.props.friend, name: this.state.friendName };
    this.props
      .onUpdate(newFriend)
      .then(() => {
        this.setState({ editing: false });
      })
      .catch(() => {
        console.error('update failed');
      });
  };

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing,
      };
    });
  };
}

function FriendList(props) {
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;
