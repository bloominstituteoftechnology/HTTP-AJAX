import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';


class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {},
            deleted: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id)
    }

    deleteFriend = () => {
        const id = this.state.friend.id;
        axios
            .delete(`http://localhost:5000/friend/${id}`)
            .then(response => this.setState({deleted: true}))
            .catch(err => console.log(err))
    }

    fetchFriend = (id) => {
        axios
            .get(`http://localhost:5000/friend/${id}`)
            .then(response => {
                this.setState(() => ({friend: response.data}))
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    render() {
        return  (
            <div className="card">
                <FriendCard friend={this.state.friend}/>
                <button className="delete"
                    onClick={this.deleteFriend}>Delete from Friends
                </button>
            </div>
        )
    }
}

export default Friend;
