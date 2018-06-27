import React from 'react';
import { Route } from 'react-router-dom';
import EditFriends from '../EditFriends/EditFriends';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CardContainer } from '../ReusableComponents/FriendsCard';

class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    editFriendHandler = event => {
        if (event.target.name === 'age') {
            if (isNaN(event.target.value) || event.target.value.includes('.')) {
                return;
            }
        }
        this.setState({ [event.target.name]: event.target.value });
    }

    saveFriendHandler = () => {
        let name = this.state.name;
        let age = this.state.age;
        let email = this.state.email;
        
        if (name === '') {
            name = this.props.friend.name;
        }
        if (email === '') {
            email = this.props.friend.email;
        }
        if (age === '') {
            age = this.props.friend.age;
        }

        const friend = { name: name, age: age, email: email }
        axios
            .put(`http://localhost:5000/friends/${this.props.friend.id}`, friend)
            .then(respone => this.props.handleSetData(respone.data))
            .catch(err => console.log(err));
    }

    deleteFriendHandler = () => {
        axios
            .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
            .then(response => this.props.handleSetData(response.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <CardContainer body inverse>


                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>


                <Route path='/edit' render={props => <EditFriends {...props}
                    name={this.state.name}
                    age={this.state.age}
                    email={this.state.email}
                    handleInput={this.editFriendHandler}
                    deleteFriend={this.deleteFriendHandler}
                    onClick={this.saveFriendHandler} />} />

            </CardContainer>
        );
    }
}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}

export default Friend;