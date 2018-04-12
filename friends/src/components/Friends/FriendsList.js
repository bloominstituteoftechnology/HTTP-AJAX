import React from 'react';
import axios from 'axios';
import Friend from './Friend'
import AddFriendForm from './AddFriendForm'
import './Friends.css'
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
                <div className='Friend__cardlist'>
                {this.state.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} getFriends={this.getFriends}/>
                })}
                </div>
            </div>
        );
    }
}

export default FriendsList;