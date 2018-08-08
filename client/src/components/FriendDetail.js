import React from 'react';
import FriendsForm from './FriendsForm';

class FriendDetail extends React.Component {
  state = {
    showForm: false
  };

  toggleForm = () =>
    this.setState(({ showForm }) => ({
      showForm: !showForm
    }));

  render() {
    const { friend, onUpdate, onDelete } = this.props;
    const decoratedOnUpdate = data => {
      onUpdate(data);
      this.setState({
        showForm: false
      });
    };
    return (
      <div>
        <h2>{friend.name}</h2>
        <div>{friend.age}</div>
        <div>{friend.email}</div>
        <button onClick={this.toggleForm}>Update Details</button>
        <button onClick={onDelete}>Delete</button>
        {this.state.showForm ? (
          <FriendsForm title="Update details" onSubmit={decoratedOnUpdate} />
        ) : null}
      </div>
    );
  }
}

export default FriendDetail;
