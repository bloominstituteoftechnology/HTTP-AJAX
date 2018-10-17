import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {friends:[], name: '', age: '', email: ''}
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

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
            .then((response) => this.setState({ friends: response.data, name: '', age: '', email: ''}))
            .catch(e => console.log("ERROR", e))
    }






    render() {
        return (
            <div className="App">
                <FriendList friends={this.state.friends}/>
                <AddFriend handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} />
            </div>
        )
    }
}

export default App
