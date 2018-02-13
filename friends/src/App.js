import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class FriendsList extends Component {
    state = {
        friends: [],
        friendName: ''
    };

    handleSubmit(event) {
      event.preventDefault();
      const newFriend = {

      };
    }

    handleInputChange = (event) => {
      console.log('input value', event.target.value)
      this.setState({ friendName: event.target.value })
    }
    render() {
        return (
            <div>
                <div>Friends Proj</div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Name: </label>
                  <input 
                    type="text" 
                    value={this.state.friendName} 
                    onChange={this.handleInputChange}/>
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Age: </label>
                  <input 
                    type="text" 
                    value={this.state.friendName} 
                    onChange={this.handleInputChange}/>
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Email: </label>
                  <input 
                    type="text" 
                    value={this.state.friendName} 
                    onChange={this.handleInputChange}/>
                  <button type="submit"> Add Friend </button>
                </form>
                <ul>
                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id}>
                                <div>{`Name: ${friend.name}`}</div>
                                <div>{`Age: ${friend.age}`}</div>
                                <div>{`Email: ${friend.email}`}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const data = axios
        .get('http://localhost:5000/friends')
        .then(response => {
            const friends = response.data;

            this.setState({ friends: friends })
            console.log('data', response.data);
        })
        .catch(error => {
            console.log('there was an error', error)
        });
            console.log('data',data);
    }
}

export default FriendsList;
