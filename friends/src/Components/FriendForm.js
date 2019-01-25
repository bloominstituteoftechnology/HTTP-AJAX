import React from "react";
// import styled from 'styled-components';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendInfo: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        this.setState({
            friendInfo: {
        ...this.state.friendInfo,
        [e.target.name]: e.target.value
            }
        });
    };

    postFriend = e => {
        e.preventDefault();
        this.props.postFriend(this.state.friendInfo);
        this.setState({
            friendInfo: {
                name: '',
                age: '',
                email: ''
            }
        });
    };


    render(){
        return (
            <div className="friend-form">
                <h1>Post a new Friend </h1>
                <form onSubmit={this.postFriend}>
                    <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    value={this.state.friendInfo.name}
                    />
                     <input
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={this.handleChange}
                    value={this.state.friendInfo.age}
                    />
                     <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                    value={this.state.friendInfo.email}
                    />
                    <button className="addFriendBtn" type="submit">Add Friend</button>
                    </form>
            </div>
        )
    }
}

export default FriendForm;