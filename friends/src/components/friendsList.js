import React, { Component } from 'react';
import axios from 'axios'

import { Route, Link } from 'react-router-dom'
import './friendsList.css'
import Friend from './friend'



class FriendsList extends Component {
    constructor() {
        super()
        this.state = {
            Friends: [],
            NewFriend: {
                name: '',
                age: '',
                email: '',
            }
        };
    this.handleChange = this.handleChange.bind(this); //bind in the constructor         
    }

    delete = (event) => {
        const id = event.target.dataset.id;
        //    console.log(friends);
        //    console.log(event.target.dataset.id)
        //    friends.splice(event.target.dataset.id, 1);
        //    this.setState({Friends: friends});
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => { 
                // console.log(response);
                this.setState({
                    Friends: response.data,
                })
            });
    }

    edit = (event) => {
        // console.log('it worked!');
        const id = this.props.match.params.id;
        // console.log(this.props.match)
        // console.log(id);
        // console.log(this.state.Friends)
        axios.put(`http://localhost:5000/friends/${id}`, this.state.NewFriend)
        .then(response => {
            // console.log(response);
            this.setState({
                Friends: response.data,
                NewFriend: {
                name:'', 
                age:'', 
                email: ''
                }
            });
            // console.log(this.state)
        });
    }
    
    handleChange(event) {
        // console.log(event.target.value);
        // console.log(event.target.name);
        const friend = this.state.NewFriend;
        // console.log(friend);
        friend[event.target.name] = event.target.value;
        // console.log(friend);
        this.setState({NewFriend: friend});
        // console.log(this.state.NewFriend)
        // console.log(newFriend);
    }

    handleSubmit = (event)  => { //arrow bind 
        event.preventDefault();
        // console.log(this.state);
        if (this.state.NewFriend.name === undefined || this.state.NewFriend.name.length === 0) return;
        // console.log('Not empty');
        axios.post('http://localhost:5000/friends', this.state.NewFriend)
            .then(response => {
                // console.log(response);
                this.setState({
                    Friends: response.data,
                    NewFriend: {
                    name:'', 
                    age:'', 
                    email: ''
                    }
                });
                // console.log(this.state)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ 
                    Friends: response.data 
                });
            });
    }

    render() {
        return (
            <div className="Friends">
                <h1 className="Friends__Title">Friends</h1>
                <Link to="/friends/:id"><button>Add Friend</button></Link>
                <Route path={'/friends/'} render={props => <Friend Friend={this.state.NewFriend} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>} />
                <div className="Friends__List">
                {this.state.Friends.map((friend) => {
                    return (
                        <div className="List__Friend-card" key={friend.id} >
                            <div className="Friend__Name">{friend.name}</div>
                            <div className="Friend__Age">{`age: ${friend.age}`}</div>
                            <div className="Friend__Email">{`email: ${friend.email}`}</div>
                            <div className="Friend__Button">
                                <button onClick={this.delete} data-id={friend.id}>Delete</button>
                                <button onClick={this.edit} >Edit</button>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        );
    }
}

export default FriendsList 
