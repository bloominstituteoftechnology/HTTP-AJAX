import React from 'react';
import FriendCard from './FriendCard';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FriendCard friend={this.props.friend} />
        )
    }
}

export default Friends;