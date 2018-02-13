import React from 'react';
import './FriendForm.css'

class FriendForm extends React.Component {
  state = {
    newFriendName: '',
    newFriendAge: 0,
    newFriendEmail: '',
  }
  render() {
    return (
      <div className="list__input">
        <form onSubmit={this.submitFriend} className="list__form">
          <input type="text" name="newFriendName" value={this.state.newFriendName} placeholder="Name" onChange={this.handleChange}/>
          <input type="number" name="newFriendAge" value={this.state.newFriendAge} placeholder="Age" onChange={this.handleChange}/>
          <input type="email" name="newFriendEmail" value={this.state.newFriendEmail} placeholder="Email" onChange={this.handleChange}/>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
