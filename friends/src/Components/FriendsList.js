import React, { Component } from 'react';
import axios from 'axios';

//import AddFriend from './AddFriend';
//import OriginalFriends from './OriginalFriends';

export default class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => console.log(error));
    }

    deleteFriend = id => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => this.setState({ friends: response.data }));
    };

    //    handleSubmit = (e, id) => {
    //       axios
    //          .put(`http://localhost:5000/friends/${id}`, { e })
    //          .then(data =>
    //             this.setState({
    //                friends: data.data,
    //                name: '',
    //                age: '',
    //                email: ''
    //             })
    //          )
    //          .catch(err => console.log(err));
    //    };

    render() {
        return (
            <div>
                {/* <AddFriend />
                <OriginalFriends
                    originalState={this.state}
                    delete={this.deleteFriend}
                    handleSubmit={this.handleSubmit}


                /> */}
            </div>
        );
    }
}