import React from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Friends.css'
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
            <Form onSubmit={this.addFriend} className='Friend__addform'>
                <FormGroup>
                    <label>Name</label>
                    <Input type='text' placeholder='Name' name='name' onChange={this.handleInputChanges} value={this.state.name}/>
                </FormGroup>

                <FormGroup>
                    <label>Age</label>
                    <Input type='number' placeholder='Age' name='age' onChange={this.handleInputChanges} value={this.state.age}/>
                </FormGroup
                >
                <FormGroup>
                    <label>Email</label>
                    <Input type='email' placeholder='Email' name='email' onChange={this.handleInputChanges} value={this.state.email}/>
                </FormGroup>

                <Button color='primary' type='submit'>Add Friend</Button>
            </Form>
        );
    }
}

export default AddFriendForm;