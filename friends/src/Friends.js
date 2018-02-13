import React from 'react';
import axios from 'axios';
import './Friends.css';

class Friends extends React.Component {
  state = {
    friendList: [],
  };

  render() {
    return (
      <div>
        <ul className="list">
          {this.state.friendList.map((friend,i) => {
            return(
              <li className="list__item" key={friend.id}>
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
