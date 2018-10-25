import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import FriendCard from './Friends/FriendCard';
import NewFriend from './Friends/NewFriend';

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

    updateHandler = (id) => {
      return () => {
        
      }
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      }) 
    }

  render() {
    return (
      <div className="App">
        <NavLink to="/" >Friends</NavLink>
        <NavLink to="/friends">Update</NavLink>      
        <h1>You're not alone! :)</h1>
        <Route path="/friends" render={(props) => <NewFriend {...props}
                                        submitHandler={this.submitHandler}
                                        handleChange={this.handleChange}
                                        name={this.state.name}
                                        age={this.state.age}
                                        email={this.state.email}
                                      />}
        />
        <Route exact path="/" render={(props) => <FriendCard {...props} friends={this.state.friends} deleteHandler={this.deleteHandler} />} />
      </div>
    );
  }
}

export default App;
