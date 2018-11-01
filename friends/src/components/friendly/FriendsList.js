import React from 'react';
import axios from 'axios';
import Friend from './Friend.js';

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            myFriends:[]
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
            this.setState(() => ({ myFriends: response.data }));
            console.log(this.state.myFriends);
            })
            .catch(error => {
            console.error('Server Error', error);
        });
    }
    
    render() {
        return (
            <div>
                {this.state.myFriends.map(friend => <Friend newFriend={friend}/>)}
            </div>
        );
    }
}

export default FriendsList;