import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';


//individual friend component

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            email: '',
            friend: null
        }
    }

    componentDidMount() {
        const id = this.props.friend.id;
        this.fetchFriend(id);
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }))
            })
            .catch(err => {
                console.log(err)
            });
    }

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //delete friend

    deleteFriend = (e) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
            .then(response => {
                this.props.deleteFriendFromList(response.data)
            })
            .catch(err => console.log(err));
        
    }

    //update friend information

    updateFriend = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/friends/${this.props.friend.id}`, {
                age: this.state.age,
                email: this.state.email
            })
            .then(response => {
                this.props.updateFriendList(response.data);
            })
            .catch(err => console.log(err));
        this.setState({
            age: '',
            email: ''
        }); 
    }

    render() {
        return (
            <div>
            {/* friend information */}
                <p>{this.props.friend.name} is {this.props.friend.age} years old. Their email address is <a href={`mailto:${this.props.friend.email}`}>{this.props.friend.email}</a>.</p>
                {/* update friend info */}
                <h4>Update your friend's info!</h4>
                <form onSubmit={this.updateFriend}>
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.inputChangehandler}
                        value={this.state.age}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.inputChangehandler}
                        value={this.state.email}
                    />
                    <button type='submit'>Update!</button>
                </form>
                {/* delete friend info */}
                <button onClick={this.deleteFriend}>We're not friends anymore!</button>
            </div>
        )
    }

}

export default Friend;