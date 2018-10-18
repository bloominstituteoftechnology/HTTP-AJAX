import React from 'react';
import axios from 'axios';
import './FriendCard.css';

class FriendCard extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    deleteFriend = (id) => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.props.updateState(response.data);
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div className="friend-card">
                <div className="friend-card-delete" onClick={() => this.deleteFriend(this.props.friend.id)}>x</div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                <div className="friend-card-content">
                    <h1>Name: {this.props.friend.name}</h1>
                    <h2>Age: {this.props.friend.age}</h2>
                    <h2>Email: {this.props.friend.email}</h2>
                </div>
            </div>
        );
    }
}

export default FriendCard;