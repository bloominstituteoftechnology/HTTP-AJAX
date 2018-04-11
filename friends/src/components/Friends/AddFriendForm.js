import React from 'react';
import axios from 'axios';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    addFriend = (e) => {
        e.preventDefault();
        // create new friend
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };

        axios.post('http://localhost:5000/friends/', newFriend)
            .then(response => {
                this.setState({name: '', age: '', email: ''});
                this.props.getFriends();
                console.log(`Friend Added`, newFriend);
            })
            .catch((error) => {
                console.log(`Error Adding Friend ${error}`)
            })
    };

    handleInputChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <form onSubmit={this.addFriend}>
                <label>Name</label>
                <input type='text' placeholder='Name' name='name' onChange={this.handleInputChanges} value={this.state.name}/>

                <label>Age</label>
                <input type='text' placeholder='Age' name='age' onChange={this.handleInputChanges} value={this.state.age}/>

                <label>Email</label>
                <input type='text' placeholder='Email' name='email' onChange={this.handleInputChanges} value={this.state.email}/>
                <button type='submit'>Add Friend</button>
            </form>
        );
    }
}

export default AddFriendForm;