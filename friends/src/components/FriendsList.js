import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends:[],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                console.log('Response', res.data)
                this.setState(() => ({ friends: res.data }));
            })
            .catch(error => {
            console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div className="friends-list">
                {this.state.friends.map(
                    friend => (
                        <div className="friend-card" key={friend.id}>
                            <h4>{friend.name}</h4>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                )}
            </div>
        )
        }
    
}

export default FriendsList;