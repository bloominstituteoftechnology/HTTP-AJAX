import React, { Component } from 'react'

import axios from 'axios';


class FriendsList extends Component {
    constructor () {
        super();
        this.state ={
            friends: [],
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log(response)
                this.setState(() => ({ friends: response.data })
            )})
            .catch(error => {
                console.log('Server Error', error)})
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addFriend = () => {
        const newFriendObj ={
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,        
        }
    
        axios
            .post('http://localhost:5000/friends', newFriendObj)
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(error => {
                console.log('Server Error', error)
            })
    }

    render() {
        return(
            <div>
                <div>
                    <p>Hi from FriendsList</p>
                    {this.state.friends.map(friend => {
                    return <li key={friend.id}>{friend.name} {friend.age} {friend.email}</li>
                    })}
                </div> 
                <div>
                    <form>
                        <input 
                            onChange={this.handleChange} 
                            name="name" 
                            value={this.state.name} 
                            type="text" 
                            placeholder="Name" 
                        />
                        <input 
                            onChange={this.handleChange} 
                            name="age" 
                            value={this.state.age} 
                            type="number" 
                            placeholder="Age" 
                        />
                        <input 
                            onChange={this.handleChange} 
                            name="email" 
                            value={this.state.email} 
                            type="email" 
                            placeholder="Email" 
                        />                     
                    </form>
                    <button onClick={this.addFriend}>Add Friend</button>  
                </div>         
            </div>
        )
    }
}

export default FriendsList