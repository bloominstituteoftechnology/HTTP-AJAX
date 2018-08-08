import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';

class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                console.log(response.data);
                this.setState({
                    friends: response.data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => <Friend person={friend} key={friend.id} />)}
                <FriendForm array={this.state.friends} didMount={this.componentDidMount} />
            </div>
        )
    }
}

export default Friends;