import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
    state = {
        friends: [],
    };

    getFriends = () => {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    };

    deleteFriend = id => {
        console.log(id);
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(result => {
                console.log('sucessfully deleted', result);
                this.getFriends();
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        return (
            <div className="App">
                <Friends
                    friends={this.state.friends}
                    deleteFriend={this.deleteFriend}
                    updateFriend={this.updateFriend}
                    getFriends={this.getFriends}
                />
                <FriendForm getFriends={this.getFriends} />
            </div>
        );
    }

    componentDidMount() {
        this.getFriends();
    }
}

export default App;
