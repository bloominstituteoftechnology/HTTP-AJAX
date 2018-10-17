import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {friends:[], friend: {name: '', age: '', email: ''}}
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(e => console.log(e))
    }


    handleChange = (e) => {
        const target = e.target
        const value = target.name === 'age' ? parseInt(target.value) : target.value
        const name = target.name
        this.setState({
            [name]: value,
            friend: {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/friends', this.state.friend)
            .then((response) => this.setState({ friends: response.data, friend: {name: '', age: '', email: ''}}))
    }






    render() {
        return (
            <div className="App">
                <FriendList friends={this.state.friends}/>
                <AddFriend handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.friend.name} age={this.state.friend.age} email={this.state.friend.email} />
            </div>
        )
    }
}

export default App
