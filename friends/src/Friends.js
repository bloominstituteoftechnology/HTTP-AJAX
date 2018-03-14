import React, { Component } from 'react';
import axios from 'axios';
import UpdateFriend from './UpdateFriend.js'

class Friends extends Component {

    constructor() {
      super();
      this.state = {
        friends: [],
        id: '',
        updateName:'',
      }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
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

    handleUpdate = event => {
        let update = {
            name: this.state.updateName,
        }
        for (let prop in update) {
            if(update[prop] === '') {
                delete update[prop];
            }
        }
        axios
        .put(`http://localhost:5000/friends/${event.target.value}`,{...update})
        .then (response => {
            this.setState({
                updateName:'',
                friends: response.data,
            })
        })
        .catch(error => {
            console.log("There was an error updating the friend",error)
        })
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
                        <form onSubmit={this.handleChange}>
                        <button type = "submit" value = {friend.id} onClick = {this.handleDelete}>Delete</button>
                        <button type = "submit" value = {friend.id} onClick = {this.handleUpdate}>Update</button>                        
                        </form>
                    </li>
                    );
                    })}
                </ul>
                <UpdateFriend
                    handleChange={this.handleChange}
                    handleUpdate={this.handleUpdate}
                    updateName = {this.state.updateName}
                />
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