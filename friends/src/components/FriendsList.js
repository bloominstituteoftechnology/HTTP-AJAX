import React, { Component } from "react";
import axios from 'axios';

export default class FriendsList extends Component {
    constructor(){ 
        super();
        this.state = {
            friends: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const friendInput= Array.from(event.target.querySelectorAll("input"));
        const newFriend = {
            id: (this.state.friends.length + 1),
            name: friendInput[0].value,
            age: Number(friendInput[1].value),
            email: friendInput[2].value,
        };
        event.target.reset();
        await axios.post('http://localhost:5000/friends', newFriend)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        await axios.get('http://localhost:5000/friends')
          .then(response => {this.setState({friends: response.data})})
          .catch(error => console.log(`You dun goofed: ${error}`))
    }

    render() {
        return (
            <div>
                <div className="FriendsList__container">
                    {this.state.friends.map((friend) => {
                        return(
                            <div key={friend.id}>
                                <div>{friend.name}</div>
                                <div>{`Age: ${friend.age}`}</div>
                                <div>{`Email: ${friend.email}`}</div>
                            </div>
                        );
                    })}
                </div>
                 <form onSubmit={this.handleSubmit}>
                    <label>New Friend:</label>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="age" placeholder="age"/>
                    <input type="text" name="email" placeholder="email"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    };

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log(`You dun goofed: ${error}`))
    }
}
