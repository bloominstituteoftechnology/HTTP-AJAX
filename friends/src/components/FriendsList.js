import React from 'react';
import axios from "axios";
import Friend from './Friend';

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

    render() {
        return (
            <div className="friends-list">
                {this.state.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })}
            </div>
        )
    }
}

export default FriendsList;