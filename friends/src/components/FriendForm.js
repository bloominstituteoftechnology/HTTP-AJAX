import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../App.css';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            friends: []
        }
    }

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state))
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/friends`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then(response => {
                this.props.addFriends(response.data);
            })
            .catch(err => console.log(err))
        this.setState({
            name: '',
            age: '',
            email: '',

        });
    }

    render() {
        return (
            <div className='friend-form'>
                <h1>Add a friend!</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.inputChangehandler}
                        value={this.state.name}
                    />
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

                    <button className="button-buddy" type='submit'> Add a Buddy </button>
                    <br />
                    <Link to='/friends' className='link'> See your new friend!</Link>
                </form>
            </div>
        );
    };
}



export default FriendForm;