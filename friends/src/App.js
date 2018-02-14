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

    updateFriends = (response) => {
        this.setState({ friends: response.data });
    }

    deleteFriend = id => {
        console.log(id);
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                console.log('sucessfully deleted', response);
                this.setState({ friends: response.data });
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
                    updateFriends={this.updateFriends}
                    getFriends={this.getFriends}
                />
                <FriendForm updateFriends={this.updateFriends}/>
            </div>
        );
    }

    componentDidMount() {
        this.getFriends();
    }
}

export default App;
