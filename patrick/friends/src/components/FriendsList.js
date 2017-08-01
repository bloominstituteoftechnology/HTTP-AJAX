import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions'; // <---- '../actions/index.js'
// import axios from 'axios';  // <---- currently unused
import '../css/FriendsList.css';


class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="friendListTitle">
              Can Haz Frenz:
                {/* <ul> */}
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
                {/* </ul> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
