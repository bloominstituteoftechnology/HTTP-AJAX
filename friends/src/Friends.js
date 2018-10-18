import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.css';

export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:5000/friends'
        this.state = {
            friends: [],
            id: null,
            name: '',
            age: '',
            email: '',
            editingId: null
        }
    }

    componentDidMount() {
        axios
            .get(this.url)
            .then(response => {
                this.setState(() => ({ friends: [...response.data] }));
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }

    changeHandler = event => {
        event.target.name === 'age' ? 
        this.setState({ [event.target.name]: Number(event.target.value) }) :
        this.setState({ [event.target.name]: event.target.value })
    };

    addFriend = event => {
        event.preventDefault();
        const { friends, name, age, email } = this.state;
        let newFriend = null;

        name && age && email ?
        newFriend = {id: friends.length + 1, name: name, age: age, email: email} :
        alert('Please enter friend details')
        
        if (newFriend) {
            this.setState(() => ({
                friends: [...friends, newFriend],
                id: null,
                name: '',
                age: '',
                email: ''
            }))
        }
        axios
        .post(this.url, newFriend) 
        .then(response => {
            this.setState({ friends: response.data })
            })
            .catch(error => {
            alert('Error: we\'re sorry, your friend could not added', error);
        });  
    }
    
    editFriend = (id, name, age, email) => {    
        this.setState(() => ({
            editingId: id,
            id: id,
            age: age,
            name: name,
            email: email
        }))
    }

    editSubmit = event => {
        event.preventDefault();
        let id = Number(event.target.id)
        const { friends, name, age, email } = this.state;
        let editedFriend = null;

        name && age && email ?
        editedFriend = {id: id, name: name, age: age, email: email} :
        alert('Please complete friend details')

        if(editedFriend) {
            friends.map(friend => {
                if (friend.id === id) {
                    axios
                    .put(`${this.url}/${id}`, editedFriend)
                    .then(response => {
                        this.setState({ friends: response.data})
                    })
                    .catch(error => {
                        alert('Error: we\'re sorry, your friend could not updated', error);
                    })
                }
            })
            this.setState(() => ({
                id: null,
                name: '',
                age: '',
                email: '',
                editingId: null
            }))
        }
    }

    deleteFriend = event => {    
        let id = Number(event.target.id);
        const { friends, name, age, email } = this.state;

        friends.map(friend => {
            if (friend.id === id) {
                axios
                .delete(`${this.url}/${id}`)
                .then(response => {
                    this.setState({ friends: response.data });
                })
                .catch(error => console.log(error));
            }
        })
    }

    render() {
        return (
            <div className='friends'>
                <div className={this.state.editingId === null ? 'friend-form' : 'hidden'}>Add Friend
                    <form className='form' onSubmit={this.addFriend}>
                        <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name'></input>
                        <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age'></input>
                        <input name='email' value={this.state.email} onChange={this.changeHandler} type='text' placeholder='Email'></input>
                        <input className='submit' type='submit' value='Submit'/>
                    </form>
                </div>
                <div className="friend-list">Friend List
                    {this.state.friends.map(friend => {
                        return (
                        <div className="friend-card" key={friend.id}>
                            <div>Name: {friend.name}</div>
                            <div>Age: {friend.age}</div>
                            <div>Email: {friend.email}</div>
                            <div className='friend-btns'>
                                <div className='btn' onClick={(id, name, age, email) => this.editFriend(friend.id, friend.name, friend.age, friend.email)}>edit</div>
                                <div className='btn' id={friend.id} onClick={this.deleteFriend}>delete</div>
                            </div>
                            <div className={this.state.editingId === friend.id ? 'edit-form' : 'hidden'}>Update Friend
                                <form className='form' id={friend.id} onSubmit={this.editSubmit}>
                                    <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name'></input>
                                    <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age'></input>
                                    <input name='email' value={this.state.email} onChange={this.changeHandler} type='text' placeholder='Email'></input>
                                    <input className='submit' type='submit' value='Submit'/>
                                </form>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}