import React from 'react';
import axios from 'axios';

//individual friend component

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            email: ''
        }
    }

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateFriend = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/friends/${this.props.friend.id}`, {
            name: this.props.friend.name,
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
                {/* delete friend button */}
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
                <button onClick={this.props.deleteFriend(this.props.friend.id)}>We're not friends anymore!</button>
            </div>
        )
    }

}

export default Friend;