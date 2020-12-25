import React, { Component } from 'react'
import './App.css'
import FriendList from './FriendList'
import axios from 'axios'
import AddFriend from './AddFriend'
import { Route } from 'react-router-dom'
import UpdateFriend from './UpdateFriend'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',

    }
  }

  componentDidMount () {
    axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(e => console.log(e))
  }

  handleChange = e => {
    const target = e.target
    const value = target.name === 'age'
            ? parseInt(target.value)
            : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
  
    axios
            .post('http://localhost:5000/friends', {
              name: this.state.name,
              age: this.state.age,
              email: this.state.email,
 
            })
            .then(response =>
                this.setState({
                  friends: response.data,
                  id: '',
                  name: '',
                  age: '',
                  email: '',
             
                })
            )
            .catch(e => console.log('ERROR', e))
  }

  updateFriendForm = e => {
    this.setState({
      redirect: !this.state.redirect
    })
  }
  updateFriend = e => {
      axios
        .put(`http://localhost:5000/friends/${e.target.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        .then(response => this.setState({friends: response.data}))
  }

  deleteFriend = e => {
    axios
            .delete(`http://localhost:5000/friends/${e.target.id}`)
            .then(response =>
                console.log(
                    this.setState({ friends: response.data, name: '', age: '', email: '' })
                )
            )
            .catch(e => console.log(e, 'ERROR'))
  }



  render () {
    return (
      <div className='App'>
        <Route
          exact
          path='/'
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              backToAdd={this.backToAdd}
              updateFriend={this.updateFriend}
                        />
                    )}
                />
        <Route
          exact
          path='/addfriend'
          render={props => (
            <AddFriend
              {...props}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              
                        />
                    )}
                />

        <Route
          path='/updatefriend'
          render={props => (
            <UpdateFriend
              {...props}
              handleChange={this.handleChange}
              updateFriend={this.updateFriend}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              
           
                        />
                    )}
                />

      </div>
    )
  }
}

export default App
