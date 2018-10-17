import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend'
import { Route, Redirect } from 'react-router-dom'
import UpdateFriend from './UpdateFriend'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: [], name: '', age: '', email: '', redirect: false }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then((response) => this.setState({ friends: response.data }))
            .catch((e) => console.log(e))
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.name === 'age' ? parseInt(target.value) : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/friends', {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then((response) => this.setState({ friends: response.data, name: '', age: '', email: '', redirect: true }))
            .catch((e) => console.log('ERROR', e))
    }

    updateFriendForm = (e) => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    updateFriend = (e) => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/friends/${e.target.id}`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then((response) => this.setState({ friends: response.data, name: '', age: '', email: '', redirect: true }))
            .catch((e) => console.log('ERROR', e))
    }

    deleteFriend = (e) => {
        axios
            .delete(`http://localhost:5000/friends/${e.target.id}`)
            .then((response) => console.log(this.setState({ friends: response.data, redirect: true })))
            .catch((e) => console.log(e, 'ERROR'))
    }

    backToAdd = (e) => {
        this.setState({
            redirect: !this.state.redirect
        })
    }

    render() {
        return (
            <div className="App">
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <FriendList
                            {...props}
                            friends={this.state.friends}
                            deleteFriend={this.deleteFriend}
                            backToAdd={this.backToAdd}
                            updateFriendForm={this.updateFriendForm}
                        />
                    )}
                />
                <Route
                    exact
                    path="/addfriend"
                    render={(props) => (
                        <AddFriend
                            {...props}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            name={this.state.name}
                            age={this.state.age}
                            email={this.state.email}
                            redirect={this.state.redirect}
                        />
                    )}
                />
                {this.updateFriend  && (
                    <div>
                        <Redirect to="/updatefriend" />
                        <Route
                            exact
                            path={`/updatefriend/:${this.state.friends.map((friend) => friend.id)}`}
                            render={(props) => (
                                <UpdateFriend
                                    {...props}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.updateFriend}
                                    name={this.state.name}
                                    age={this.state.age}
                                    email={this.state.email}
                                    redirect={this.state.redirect}
                                />
                            )}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default App
