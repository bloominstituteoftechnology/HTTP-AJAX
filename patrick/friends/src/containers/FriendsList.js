import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions'; // <---- '../actions/index.js'
// import axios from 'axios';
import '../css/FriendsList.css';
import { bindActionCreators } from 'redux';

// I THINK THIS IS A CONTAINER INSTEAD OF COMPONENT


class FriendsList extends Component {
  componentDidMount() {
    // const promise = axios.get('http://localhost:5000/friends');
    this.props.getAmigos();
  }

  render() {
    return (
      <div className="friendsList">
        <div className="friendsListTitle">
          Can Haz Frenz:
            <ol>
              {this.props.friends.map((friend, i) => {
                return (
                  <li key={i}>
                    <p>{`Friend ${i + 1}`}</p>
                      <ul>
                        <li>{`Name: ${friend.name}`}</li>
                        <li>{`Age: ${friend.age}`}</li>
                        <li>{`Email: ${friend.email}`}</li>
                      </ul>
                  </li>
                );
              })}
            </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAmigos: getFriends }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
