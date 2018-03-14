import React, {Component} from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FriendsList extends Component {
    constructor() {
        super();

        this.state = {
            friends: [],
            newName: '',
            newAge: '',
            newEmail: ''
        };
    };
    
    handleName = (event) => {
        this.setState({ newName: event.target.value})
    };

    handleAge = (event) => {
        this.setState({ newAge: event.target.value})
    };

    handleEmail = (event) => {
        this.setState({ newEmail: event.target.value})
    };

    addNewItem = (event) => {
        event.preventDefault();

        const newFriend = {
            name: this.state.newName, 
            age: this.state.newAge, 
            email: this.state.newEmail
        };

        const tempFriends = this.state.friends;
        tempFriends.push(newFriend);

        axios.post('http://localhost:5000/friends', newFriend)
        .catch(err => {
            console.error('There was an error', err);
        })
        
        this.setState({
            friends: tempFriends,
            newName: '',
            newAge: '',
            newEmail: ''
        })

    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}));      
        })
        .catch(error => {
            console.error('Server Error:', error);
        });
    }   


    render() {
        return(
        <div>
            
        {this.state.friends.map(friend => {
            return (
                <div className='card-box'>
                <Card body className='friend-card'>
                    <CardTitle>{friend.name}</CardTitle>
                    <CardText>
                        {`Age: ${friend.age}`}<br/>
                        {`E-mail: ${friend.email}`}
                    </CardText>
                </Card>
                </div>
            );
        })}
    
    <form >
    <input
        type='text'
        onChange={this.handleName}
        placeholder='New Friend Name'
        value={this.state.newName}
    />
    <input
        type='text'
        onChange={this.handleAge}
        placeholder='New Friend Age'
        value={this.state.newAge}
    />
    <input
        type='text'
        onChange={this.handleEmail}
        placeholder='New Friend Email'
        value={this.state.newEmail}
    />
    <button onClick={this.addNewItem}>Add Friend</button>
    </form>
            
        </div>
    )
    }
}

export default FriendsList;