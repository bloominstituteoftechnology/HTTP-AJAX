import React from 'react';
import axios from "axios";
import './Friends.css';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        };
    }
    
    componentDidMount() {
      axios
        .get("http://localhost:5000/friends")
        .then(response => {
          this.setState({ friends: response.data });
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }

    addFriend = friend => {
        axios.post("http://localhost:5000/friends", friend)
            .then(response => {
            this.setState({ friends: response.data });
            })
            .catch(err => {
            console.log("Error: ", err);
            });
    }

    deleteFriend = id => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
              this.setState({ friends: response.data });
            })
            .catch(err => {
              console.log("Error: ", err);
            });
    }

    updateFriend = friend => {
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(response => {
              this.setState({ friends: response.data });
            })
            .catch(err => {
              console.log("Error: ", err);
            });
    }

    render() {
        return (
            <>
                <FriendForm mode="add" addFriendHandler={this.addFriend} />
                <div className="friends-list">
                    <div className="friend-heading">
                            <span className="friend-name">Friend</span>
                            <span className="friend-age">Age</span>
                            <span className="friend-email">Email</span>
                            <span className="friend-controls">&nbsp;</span>
                    </div>
                    {this.state.friends.map(friend => {
                        return <Friend 
                            key={friend.id} 
                            friend={friend} 
                            deleteFriendHandler={this.deleteFriend} 
                            updateFriendHandler={this.updateFriend}
                        />
                    })}
                </div>
            </>
        )
    }
}

export default FriendsList;