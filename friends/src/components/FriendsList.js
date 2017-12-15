import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import Friend from './Friend';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <ul>
                {this.props.friends.map((friend, i) => {
                    return (
                        <Friend key={i} index={i} friend={friend} />
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);