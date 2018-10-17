import React from 'react';
import axios from 'axios';
import FriendCard from './friend-card.js';
import FriendAdder from './friend-adder.js';

class Friends extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            friends: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="friends">
                <FriendAdder onSubmit={this.addFriend} />
                {this.state.friends.map(friendData => (
                    <FriendCard key={friendData.id} friend={friendData} />
                ))}
            </div>
        );
    }

    //-- Interaction ---------------------------------
    addFriend = (friendData) => {
        axios.post('http://localhost:5000/friends', friendData)
        .then(response => {
            let refreshedFriends = response.data;
            this.setState({friends: refreshedFriends});
        })
        .catch(error => console.log(error));
    }
}

export default Friends;
