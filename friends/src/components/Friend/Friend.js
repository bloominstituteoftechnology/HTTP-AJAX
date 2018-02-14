import React from 'react';
import './Friend.css';
// import axios from 'axios';

class Friend extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  index = this.props.index;

  onDelete = event => {
    event.preventDefault();
    this.props.deleteFriend(this.props.friend.id);
  };

  render() {
    console.log('what this is in Friends.js:', this);
    return (
      <div>
        <li className="friend">
          <form type="submit" onSubmit={this.onDelete}>
            <div className="friend__name">{this.props.friend.name}</div>
            <div className="friend__age">{this.props.friend.age}</div>
            <div className="friend__email">{this.props.friend.email}</div>
            <input type="submit" value="delete" className="form__button" />
          </form>
        </li>
        {/* Was making an update
                  friend using put,
                  copy paste some stuff
                  from FriendForm.js

          <li className="friend">
          <form type="submit" onSubmit={editFriend}>
            <input
              type="text"
              className="form__input"
              placeholder="Name"
              onChange={this.updateFriend}
              name="name"
              value={this.state.name}
            />
            <input
              type="number"
              className="form__input"
              placeholder="Age"
              onChange={this.updateFriend}
              name="age"
              value={this.state.age}
            />
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              onChange={this.updateFriend}
              name="email"
              value={this.state.email}
            />
          </form>
        </li> */}
      </div>
    );
  }
}

export default Friend;
