import React from 'react';
import axios from 'axios';
import Friend from './Friend'
import AddFriendForm from './AddFriendForm'
class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []

        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(error => {
                console.log(`There was an error getting friends: ${error}`)
            })
    };

    render() {
        return (
            <div>
                <AddFriendForm getFriends={this.getFriends}/>
                <ul>
                    {this.state.friends.map(friend => {
                        return <Friend friend={friend}  getFriends={this.getFriends}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default FriendsList;