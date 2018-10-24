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
        axios
          .post("http://localhost:5000/friends", friend)
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
                <FriendForm addFriendHandler={this.addFriend} />
                <table className="friends-list">
                    <thead>
                        <tr>
                            <th className="friend-name">Friend</th>
                            <th className="friend-age">Age</th>
                            <th className="friend-email">Email</th>
                            <th className="friend-controls">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.friends.map(friend => {
                            return <Friend key={friend.id} friend={friend} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default FriendsList;