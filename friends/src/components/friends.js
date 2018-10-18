import React from 'react';
import axios from 'axios';
import FriendCard from './friend-card.js';
import FriendAdder from './friend-adder.js';

class Friends extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            friends: [],
            showForm: false
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
                <FriendAdder
                    onSubmit={this.addFriend}
                    onClick={this.showForm}
                    showForm={this.state.showForm}
                />
                {this.state.friends.map(friendData => (
                    <FriendCard
                        key={friendData.id}
                        friend={friendData}
                        onDelete={this.deleteFriend}
                        onChange={this.editFriend}
                    />
                ))}
            </div>
        );
    }

    //-- Interaction ---------------------------------
    showForm = () => {
        this.setState({showForm: true});
    }
    addFriend = (friendData) => {
        this.setState({
            showForm: false,
        });
        axios.post('http://localhost:5000/friends', friendData)
        .then(response => {
            let refreshedFriends = response.data;
            this.setState({friends: refreshedFriends});
        })
        .catch(error => console.log(error));
    }
    deleteFriend = clickEvent => {
        let friendId = clickEvent.target.dataset.id;
        axios.delete(`http://localhost:5000/friends/${friendId}`)
        .then(response => {
            let refreshedFriends = response.data;
            this.setState({friends: refreshedFriends});
        })
        .catch(error => console.log(error));
    }
    editFriend = newData => {
        
    }
}

export default Friends;
