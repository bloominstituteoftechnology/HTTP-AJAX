import './FriendsField.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions';

class FriendsField extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
        this.handleAddFriend = this.handleAddFriend.bind(this);
    }
    handleName = (e) => {
        this.setState({ name: e.target.value })
    }

    handleAge = (e) => {
        this.setState({ age: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleAddFriend(event) {
        event.preventDefault();
        this.props.addFriend(this.state);
        return false;
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className='FriendsField'>
                    <h2>Welcome to Friends-List @ Lambda</h2>
                    <h2>Add a new friend below</h2>
                </div>
                <div className='FriendsField'>
                    <input type='text' placeholder='Name' onChange={this.handleName}></input>
                    <input type='text' placeholder='Age' onChange={this.handleAge}></input>
                    <input type='text' placeholder='Email' onChange={this.handleEmail}></input>
                    <button onClick={this.handleAddFriend}>Submit</button>
                </div>
            </div>
        );

    }
}

export default connect(null, { addFriend })(FriendsField);