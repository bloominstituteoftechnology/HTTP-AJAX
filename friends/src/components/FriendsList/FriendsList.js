import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../actions';
import './FriendsList.css';
import Friend from '../Friend/Friend'
import FriendsField from '../FriendsField/FriendsField';

class FriendsList extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                <FriendsField />
                <div className='friendsList'>
                    {this.props.friends.map((friend, index) => {
                        return (
                            <Friend
                                key={index}
                                index={index}
                                friend={friend}
                            />
                        );
                    })}
                </div>
            </div>    
        );
    }
};

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
