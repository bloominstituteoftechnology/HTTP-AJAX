import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import FriendCard from './Friends/FriendCard';
import UpdateFriend from './Friends/UpdateFriend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {this.setState({ friends: response.data })})
      .catch(err => {
        console.log(err);
      })
    }

    submitHandler = (event) => {
      event.preventDefault();
      axios.post("http://localhost:5000/friends", { name: this.state.name, age: this.state.age, email: this.state.email })
        .then(response => this.setState({ friends: response.data }))
        .catch(err => console.log(err))
    }

    deleteHandler = (id) => {
      return () => {
        axios.delete(`http://localhost:5000/friends/${id}`)
          .then(response => this.setState({ friends: response.data }))
          .catch(err => console.log(err))
      }
    }

    updateHandler = (id, name, age, email) => {
      axios.put(`http://localhost:5000/friends/${id}`, {
        name: name,
        age: age,
        email: email
      })
        .then( response => {
          this.setState({ friends: response.data })
        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      }) 
    }

  render() {
    return (
      <div className="App">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/friends/:id">Update</NavLink>
        <Route exact path="/" render={(props) => <FriendCard {...props} friends={this.state.friends} deleteHandler={this.deleteHandler} />} />

        <Route path="/friends/:id" render={(props) => <UpdateFriend {...props}
                                        name={this.state.name}
                                        age={this.state.age}
                                        email={this.state.email}
                                        submitHandler={this.submitHandler}
                                        updateHandler={this.updateHandler}
                                        deleteHandler={this.deleteHandler}
                                        handleChange={this.handleChange}
                                        friends={this.state.friends}
                                      />}
        />
      </div>
    );
  }
}

export default App;
