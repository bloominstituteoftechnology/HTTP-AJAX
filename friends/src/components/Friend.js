import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id)
    }

    fetchFriend = (id) => {
        axios
            .get(`http://localhost:5000/friend/${id}`)
            .then(resp => {
                this.setState(() => ({friend: resp.data}))
            })
            .catch(err => console.log(err))
    }

    render() { 
        return (
            <FriendCard friend={this.state.friend}/>
        )
    }
}
 
export default Friend;