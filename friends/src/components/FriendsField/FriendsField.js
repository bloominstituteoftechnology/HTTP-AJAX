import './FriendsField.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions';

class FriendsField extends Component {
    constructor() {
        super();
        this.state = {
            newName: 'Test',
            newAge: '10',
            newEmail: 'test@test.test'
        }
        this.handleAddFriend = this.handleAddFriend.bind(this);
    }
    handleName = () => {

    }

    handleAge = () => {

    }

    handleEmail = () => {

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
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Age'></input>
                    <input type='text' placeholder='Email'></input>
                    <button onClick={this.handleAddFriend}>Submit</button>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { addFriend })(FriendsField);