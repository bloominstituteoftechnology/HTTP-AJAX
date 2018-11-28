import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(
                res => {
                    console.log(res);
                    this.setState({ friends: res.data})
                }
            )
            .catch( err => console.log(err))
    }

    render() {
        return (
            <div className="friends-list">
                {this.state.friends.map(
                    friend => (
                        <h4 key={friend.id}>{friend.name}</h4>
                    )
                )}
            </div>
        )
    }
}

export default FriendsList;