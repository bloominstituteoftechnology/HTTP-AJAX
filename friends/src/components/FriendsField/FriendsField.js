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
            email: '',
            newName: 'Name..',
            newAge: 'Age..',
            newEmail: 'email..'
        }
        this.handleAddFriend = this.handleAddFriend.bind(this);
    }

    handleClickName = (e) => {
        if (this.state.newName === 'Name..') this.setState({ newName: '' });
        if (this.state.newName === '') this.setState({ newName: 'Name..' });
    }

    handleClickAge = (e) => {
        if (this.state.newAge === 'Age..') this.setState({ newAge: '' });
        if (this.state.newAge === '') this.setState({ newAge: 'Age..' });
    }

    handleClickEmail = (e) => {
        if (this.state.newEmail === 'email..') this.setState({ newEmail: '' });
        if (this.state.newEmail === '') this.setState({ newEmail: 'email..' });
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
        this.props.addFriend({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });
        this.setState({
            newName: 'Name..',
            newAge: 'Age..',
            newEmail: 'email..'
        })
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
                    <input type='text' value={this.state.newName} onChange={this.handleName} onFocus={this.handleClickName} onBlur={this.handleClickName}></input>
                    <input type='text' value={this.state.newAge} onChange={this.handleAge} onFocus={this.handleClickAge} onBlur={this.handleClickAge}></input>
                    <input type='text' value={this.state.newEmail} onChange={this.handleEmail} onFocus={this.handleClickEmail} onBlur={this.handleClickEmail}></input>
                    <button onClick={this.handleAddFriend}>Submit</button>
                </div>
            </div>
        );

    }
}

export default connect(null, { addFriend })(FriendsField);