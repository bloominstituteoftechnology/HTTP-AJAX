import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

export default class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            newFriend: {
                name: '',
                age: 0,
                email: '',
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then( response => {
                this.setState({
                    friends: response.data
                });
            })
            .catch( error => {
                console.log(error);
            })
    }

    inputChange = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value,
            }
        })
    }

    numberInputChange= e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: parseInt(e.target.value),
            }
        })
    }

    addNewFriend = () => {
        axios.post('http://localhost:5000/friends', this.state.newFriend)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        
        this.setState({
            newFriend: {
                name: '',
                age: 0,
                email: ''
            }
        })
    }

    render() {
        return (
            <>
            {this.state.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
            <NewFriendForm inputChange={this.inputChange} addNewFriend={this.addNewFriend} numberInputChange={this.numberInputChange} newFriend={this.state.newFriend}/>
            </>
            
        )
    }
}