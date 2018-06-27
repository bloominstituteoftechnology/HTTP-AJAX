import React from 'react';
import { Route } from 'react-router-dom';
import EditFriends from './EditFriends/EditFriends';
import axios from 'axios';

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
        this.setState({ [event.target.name]: event.target.value });
    }

    saveFriendHandler = () => {
        const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
        axios
            .put(`http://localhost:5000/friends/${this.props.friend.id}`, friend)
            .then(respone => this.props.handleSetData(respone.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>

                <Route path='/edit' render={props => <EditFriends {...props} handleInput={this.editFriendHandler} onClick={this.saveFriendHandler} />} />
            </div >
        );
    }
}

export default Friend;