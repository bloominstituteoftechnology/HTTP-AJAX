import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

class Friend extends Component {
  constructor(props) {
    super(props);
    //this.showFriendPage = this.showFriendPage.bind(this);
  }

  // showFriendPage(event) {
  //   const id = event.target.id;
  //   console.log(id)
  //   <Link to={`/users/${id}`}></Link>
  // }

  render() {
    return (
      <div>
        <h1>Friend Component</h1>
        <ul>
          {this.props.friends.map(friend => {
            return <li key={friend.id}>
              <h3>{friend.name}</h3>
              <h4>{friend.age}</h4>
              <h5>{friend.email}</h5>
              <button id={friend.id} onClick={this.props.removeFriend}>delete</button>
              <button ><Link to={`/friend/${friend.id}`}>Show Friend</Link></button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Friend;
