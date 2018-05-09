import React, { Component } from 'react';
import axios from 'axios';


class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then((response => this.setState({friends: response.data})))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.friends.map((friend, index) => { return <div key={friend.name + index}>{friend.name}</div>})}
            </div>
        )
    }
}



export default Friends;