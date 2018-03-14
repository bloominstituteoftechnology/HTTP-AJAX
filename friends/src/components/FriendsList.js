import React, { Component } from  'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FriendsList.css';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            Friends: [],
            NewFriend: {
                name: '',
                age: '',
                email: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({Friends: response.data});
        });
    }

    handleChange(event) {
        const newFriend = this.state.NewFriend;

        newFriend[event.target.name] = event.target.value;

        this.setState({
            NewFriend: newFriend,
        })
    }

   
    handleSubmit(event) {
        event.preventDefault(); // prevents default submition
        if(this.state.NewFriend.name === undefined || this.state.NewFriend.name === '') return Error("Enter a name"); // simple stop from posting
        //if(this.state.NewFriend.email === undefined || this.state.NewFriend.email === '') return Error("Enter an email");

        axios.post(`http://localhost:5000/friends`, this.state.NewFriend )
        .then(response => {
            //response ToDo
            this.setState({
                Friends: response.data, 
                NewFriend: {
                    name: '',
                    age: '',
                    email: '',
                }
            });
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className="Friends"> 
                <h3 className="Friends__Title">Friends</h3>
                <div className="Friends__List">
                {this.state.Friends.map(friend => {
                    return (
                        <Link to={`/friends/${friend.id}`} key={friend.id}>
                            <div className="List__Friend-card">
                                <div className="Friend__Name">{friend.name}</div>
                                <div className="Friend__Age">{`Age: ${friend.age}`}</div>
                                <div className="Friend__Email">{`Email: ${friend.email}`}</div>
                            </div>
                        </Link>
                    );
                })}
                </div>
                <div className="Friends__New-friend">
                    <form onSubmit={this.handleSubmit}>
                        
                        <fieldset>
                            <legend>New Friend Information:</legend>
                            <div>
                                <label>Name: </label>
                                <input onChange={this.handleChange} type="text" name="name" placeholder="enter name" value={this.state.NewFriend.name}/>
                            </div>
                            <div>
                            <label>Age: </label>
                                <input  onChange={this.handleChange} type="number" name="age" placeholder="age" value={this.state.NewFriend.age}/>
                            </div>
                            <div>
                            <label>Email: </label>
                                <input onChange={this.handleChange} type="email" name="email" placeholder="enter email" value={this.state.NewFriend.email}/>
                            </div>
                            <button>Add Friend</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        );
    }
}

export default FriendsList;