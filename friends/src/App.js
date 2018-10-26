import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend.js';
import Form from './Form.js';
import {Route} from 'react-router-dom';
import { AddFriend } from './AddFriend';
import UpdateForm from './UpdateForm';
import Home from './Home';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      id: 0,
      name: '',
      age: 0,
      email: '',
      addFriend: false,
      updateStatus: false
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
      .then( response => {
        if(typeof response.data.message === 'string'){
          Promise.reject("Error: Friends not found :( ")
        }
        this.setState({ data: response.data})
      })
      .catch( err=> console.log(err))
    }

  handleChange = (event)=>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  preventDefault = (e) => {
    e.preventDefault();
  }
  
  addFriend = (e, prevState) => {
    e.preventDefault();
    this.setState({
      addFriend: !prevState.addFriend
    })
  }

  submit = (e) => {
    e.preventDefault();
    let newID = this.state.data.length+1;
    console.log(newID);
    this.setState({
      id: newID
    })

    const newObj = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newObj)
      .then(response=>{
        this.setState({
          data: response.data
        })
      })
      .catch( err=>console.log("Couldn't update axios"))

    document.getElementById('form').reset();

  }

  delete = (id) => {
    return()=>{
      console.log(id)
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then( response=>{
          this.setState({
            data: response.data
          })
        })
        .catch(err=>console.log(err))
    }
  }

  updateHandler = (e) => {
    e.preventDefault();
    console.log(this.state.updateStatus)
    this.setState({
      updateStatus: !this.state.updateStatus
    })
  }

  exitForm = (e) => {
    this.setState({
      updateStatus: !this.state.updateStatus
    })    
  }

  updateFriend = (id, name, age, email) => {
    return()=>{
      console.log(id, name, age, email)
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Route path='/' render={(props) => <Home {...props} 
           change={this.handleChange} 
           submit={this.submit}
           no={this.preventDefault}
           delete={this.delete}
           updateHandler={this.updateHandler}
           update={this.updateFriend}
           data={this.state.data}
           exitForm={this.state.UpdateForm} /> } 
          />
      </div>
    );
  }
}
