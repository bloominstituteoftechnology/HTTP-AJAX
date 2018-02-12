import React, {Component} from 'react'
import axios from 'axios';

class Friend extends Component {
    state = {
        friends: []
    }

    render() {
        return (
            this.state.friends.map((friend) => {
            return (
                <ul key={friend.id}>
                    <li>{friend.name}</li>
                    <li>{friend.age}</li>
                    <li>{friend.email}</li>
                </ul>)
            })
        );
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({friends: response.data})
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export default Friend;