import React from 'react';
import axios from 'axios';
import './Friends.css';

class Friends extends React.Component {
  state = {
    friendList: [],
    newFriendName: '',
    newFriendAge: 0,
    newFriendEmail: '',
  };

  render() {
    return (
      <div>
        <ul className="list">
          <li className="list__input">
            <form onSubmit={this.submitFriend} className="list__form">
              <input type="text" value={this.state.newFriendName} placeholder="Name" onChange={this.handleNameChange}/>
              <input type="number" value={this.state.newFriendAge} placeholder="Age" onChange={this.handleAgeChange}/>
              <input type="text" value={this.state.newFriendEmail} placeholder="Email" onChange={this.handleEmailChange}/>
              <button type="submit">Add Friend</button>
            </form>
          </li>
          {this.state.friendList.map((friend,i) => {
            return(
              <li className="list__item" key={i+'b'}>
                <div><b>Name:</b> {friend.name}</div>
                <div><b>Age:</b> {friend.age}</div>
                <div><b>E-mail:</b> {friend.email}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleEmailChange = event => {this.setState({ newFriendEmail: event.target.value })};
  handleAgeChange = event => {this.setState({ newFriendAge: event.target.value })};
  handleNameChange = event => {this.setState({ newFriendName: event.target.value })};

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

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friendList: response.data });
      })
      .catch(error => {
        console.log("ahhhhh, the error is here!:", error);
      });
  }
}

export default Friends;
