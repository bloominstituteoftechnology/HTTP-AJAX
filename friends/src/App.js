import React, { Component } from 'react'
import axios from 'axios'
import { Route, withRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import Friends from './components/Friends'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err))
  }

  addFriend = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => this.setState({ friends: res.data }, this.props.history.push('/friends')))
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }, this.props.history.push('/friends')))
  }

  render() {
    const {friends} = this.state
    return (
      <div className="App">
        <h1>Axios Friends</h1>
        
        <Navigation />

        <Route exact path='/friends' render={(props) => <Friends {...props} friends={friends} />} />
        <Route path='/friends/:id' render={(props) => <Friend {...props} friends={friends} deleteFriend={this.deleteFriend} />} />
        <Route path='/add' render={(props) => <FriendForm friends={friends} addFriend={this.addFriend} />} />
      </div>
    )
  }
}

export default withRouter(App)
