import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend';

class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="App">
                <FriendList friends={this.state.friends}/>
                <AddFriend />
            </div>
        )
    }
}

export default App
