import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Friend from "./components/Friend";
import Friends from "./components/Friends";

import axios from 'axios';
import {Route} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name:"",
      age:"",
      email:""
    };
  }å

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
        .then(response => {
            this.setState({ friends: response.data });
            }
        )
        .catch(err => console.log(err))
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age:this.state.age,
        email: this.state.email
      })
      .then( response =>  {
        console.log(response);
        this.setState({
          friends:response.data,
          name:"",
          age:"",
          email:""
        })
      })
      .catch( err =>  {
        console.log(err);
      });
  }

  deleteFriend = event => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${event.target.id}`)
    .then( response =>  {
      console.log(response);
      this.setState({
        friends:response.data,
        })
    })
    .catch( err =>  {
      console.log(err);
    });
  }

  updateFriend = event => {
    event.preventDefault();
    if(!(this.state.name===""||this.state.age===""||this.state.email===""))
    axios.put(`http://localhost:5000/friends/${this.props.match.params.id}`, {
        id:Number(event.target.id),
        name: this.state.name,
        age:this.state.age,
        email: this.state.email
      })
      .then( response =>  {
        console.log(response);
        this.setState({
          friends:response.data,
          name:"",
          age:"",
          email:""
        })
      })
      .catch( err =>  {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
      <header className="header"><h1>Friends</h1></header>

        <Route exact path="/" 
          render={() => (
            <>
              <Friends 
                friends={this.state.friends} 
                delete={this.deleteFriend} 
                update={this.updateFriend} 
              />
              <Form 
                change={this.handleChange} 
                addFriend={this.addFriend}
                name={this.state.name}
                age={this.state.age}
                email={this.state.email}
              />
            </>
          )}/>
        <Route exact path="/friend/:id"
          render={(props) => (
            <Friend 
              {...props}
              update={this.updateFriend}
              change={this.handleChange}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
            />
          )}
        />
      <footer className="footer"></footer>
      </div>
      );
  }
}

export default App;
