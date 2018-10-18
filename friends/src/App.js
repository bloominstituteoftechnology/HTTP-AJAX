import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import axios from 'axios';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    // Throwing a bunch of stuff on state for future use
    this.state = {
      friends: [],
      name: '',
      age: null,
      email: '',  
      likes: '',
      pronoun: '',  
      editmode: false,
      editID: null,
      editFriend: {},    
    }
  }

  // Grab data from server api call after component mounts
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           this.setState({
             friends: res.data,
           })
         })
         .catch(err => console.log(err))
  }

  // As user is editing form, populate relevant state items with data.
  changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }
  
  // This will work for both PUT (edit existing friend) and POST (new friend)
  submitHandler = event => {
    event.preventDefault();
    // if no relevant state variables are blank, proceed. Else (below) alert user.
    if (this.state.name !== '' && this.state.age !== null && this.state.email !== '' && this.state.likes !== '' && this.state.pronoun !== '') {
      let obj = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        likes: this.state.likes,
        pronoun: this.state.pronoun,  
      }
      // If editmore is true, send edits to server via PUT. Then blank out state.
      if (this.state.editmode === true) {
        console.log(`editmode: ${this.state.editmode}`)
        axios.put(`http://localhost:5000/friends/${this.state.editID}`, obj)
            .then(res => {
              this.setState({
                friends: res.data,
                name: '',
                age: null,
                email: '',
                likes: '',
                pronoun: '',
                editmode: false,
                editID: null,
                editFriend: {},
              })
            })
            .catch(err => console.log(err))
      }
      // if editmode is not true, POST new friend to server
      else {
      axios.post('http://localhost:5000/friends', obj)
            .then(res => {
              this.setState({
                friends: res.data,
                name: '',
                age: null,
                email: '',
                likes: '',
                pronoun: '',   
              })
            })
            .catch(err => console.log(err))
      }
      alert('Submitting friend data. Please use the button to go back to Friend List.')
    }
    else {
      alert("Please enter some data about your friend.")
    }
  // blank out the form bc submit event is not doing it.
  document.querySelector('form').reset();
  }

  // send DELETE to server based on target id
  deleteHandler = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
       .then(res => {
         this.setState({
           friends: res.data,
         })
       })
       .catch(err => console.log(err));
  }

  // set editmode to true and editID to the selected ID
  editHandler = (friend, id) => {
    console.log(`edit mode: true for friend id: ${id}`)
    console.log(friend)
    this.setState({
      editmode: true,
      editID: id,
      editFriend: friend
    })
  }

  // error handing for user who enters editmode but leaves form without editing.state
  failureHandler = () => {
    if (this.state.editmode === true) {
      this.setState({
        editmode: false,
        editID: null,
        editFriend: {},
      })
    }
  }

  render() {
    return (

      <div className="App">

        <Route exact path='/' render={props => <FriendList {...props} editMode={this.state.editmode} friends={this.state.friends} editHandler={this.editHandler} deleteHandler={this.deleteHandler}/>}/>
        
        <Route path='/add' render={props => <FriendForm {...props} editFriend={this.state.editFriend} editMode={this.state.editmode} changeHandler={this.changeHandler} submitHandler={this.submitHandler} failureHandler={this.failureHandler}/>}/>

      </div>

    );
  } 
}

export default App;
