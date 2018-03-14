import React, { Component } from 'react';
import axios from 'axios';


class Friends extends Component {

    constructor() {
      super();
      this.state = {
        friends: [],
        id: ''
      }
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleDelete = event => {
        axios.delete(`http://localhost:5000/friends/${event.target.value}`)
        .then(response => {
            this.setState({  Friends: response.data });
        })
        .catch(error => {
            console.log(`there was an error deleting friends ${error}`)
          });
    }

    render() {
        return (
            <div>
                <div className="friend-title">Friends</div>
                <ul className="friend-grid">
                    {this.state.friends.map(friend => {
                    return (
                    <li key={friend.id} className="friend">
                        <div className="friend-name">{friend.name}</div>
                        <div className="friend-age">{`Age: ${friend.age}`}</div>
                        <div className="friend-email">{`Email: ${friend.email}`}</div>
                        <form onSubmit={this.handleDelete}>
                        <button type = "submit" value = {friend.id} onClick = {this.handleDelete}>Delete</button>
                        </form>
                    </li>
                    );
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friends: response.data });
        })
        .catch(error => {
          console.log(`there was an error getting friends ${error}`)
        });
    }  
}

export default Friends;