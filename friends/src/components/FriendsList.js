import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';


class FriendsList extends Component {
    constructor(){
        super();
        this.state={
            friendsData:[],
            friend: {
                name:'',
                age:'',
                email:'',
            }
        }
    }
  
    componentDidMount(){
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({friends: response.data});
        })
        .catch(err => console.log(err));
    }

    handleChange = e => {
        this.setState({
            friend:{
                ...this.state.friend,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmitNewFriend = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/friends', this.state.friend)
            .then(response => {
               this.setState({friendsData: response.data});
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="friends-list">
                 {this.state.friendsData.map(friend => <Friend key={friend.id} friend={friend} />)}
                 <button onClick={this.handleSubmitNewFriend}>Submit</button>
                 <form>
                    <input
                        type="text"
                        placeholder="name..."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="age..."
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="email..."
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
  }

export default FriendsList;