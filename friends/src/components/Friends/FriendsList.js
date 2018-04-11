import React from 'react';
import axios from 'axios';
import Friend from './Friend'

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
            .then(respone => {
                this.setState({friends: respone.data})
            })
            .catch(error => {
                console.log(`There was an error getting friends: ${error}`)
            })
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.friends.map(friend => {
                        return <Friend friend={friend}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default FriendsList;