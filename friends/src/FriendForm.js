import React from 'react';
import axios from 'axios';
import './FriendForm.css'

class FriendForm extends React.Component {
  state = {
    newFriendName: '',
    newFriendAge: 0,
    newFriendEmail: '',
  }
  render() {
    return (
      <div className="form__box">
        <form onSubmit={this.submitFriend} className="form__box-inside">
          <input type="text" name="newFriendName" value={this.state.newFriendName} placeholder="Name" onChange={this.handleChange}/>
          <input type="number" name="newFriendAge" value={this.state.newFriendAge} placeholder="Age" onChange={this.handleChange}/>
          <input type="email" name="newFriendEmail" value={this.state.newFriendEmail} placeholder="Email" onChange={this.handleChange}/>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }

  handleChange = event => {this.setState({ [event.target.name]: event.target.value })};

  submitFriend = event => {
    const newFriend = {
      name: this.state.newFriendName,
      age: this.state.newFriendAge,
      email: this.state.newFriendEmail,
    };

    // const newFriendList = [...this.state.friendList, newFriend];
    axios.post('http://localhost:5000/friends', {
      name: newFriend.name,
      age: newFriend.age,
      email: newFriend.email,
    })
      .then(()=>{console.log('success')})
      .catch(()=>{console.log('fail')});

    // this.setState({ friendList: newFriendList, newFriendName: '', newFriendAge: 0, newFriendEmail: '' });
  };


}

export default FriendForm;
