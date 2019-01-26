import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Cards from './cards';
import FriendForm from './form';
import UpdateForm from './updateForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      update: [],
      postSuccess: "",
      postFailed: "",
      updateID: '',
      clicked: false
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({friends: response.data})
        })
        .catch( err => {
          console.log(err)
        })
      }

    updateFriendsList = (friend) => {
      axios
        .post("http://localhost:5000/friends", friend)
        .then(response => {
          this.setState({
            friends: response.data,
            postSuccess: "Friend Successfully Added!",
            postFailed: ""
          });
        })
        .catch(err => {
          console.log("Rejected:", err)
          this.setState({
            postFailed: "Could not add your friend",
            PostSuccess: ""
          });
        })
    }

    deleteFriend = id => {
      axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          friends: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    }

    //sets the state of updateID of the div that contains the edit button that was clicked
    selectUpdateID = (id, bool, obj) => {
      this.setState({
        updateID: id,
        clicked: bool,
        update: obj
      })
    }


    resetStateAndUpdate = (id, obj) => {
      axios
      .put(`http://localhost:5000/friends/${id}`, obj)
      .then(response => {
        console.log(response)
        this.setState({
          friends: response.data,
          updateID: "",
          clicked: false,
          update: []
        })
      })
      .catch(err => {
        console.log(err)
      })
    }


    
   


  render() {
    console.log(this.state.update)
    const isClicked = this.state.clicked;
    let form;
    if(isClicked) {
      form = <UpdateForm update={this.state.update} updateFriendsList={this.updateFriendsList} updateID={this.state.updateID} clicked={this.state.clicked} resetStateAndUpdate={this.resetStateAndUpdate} />
    } else {
      form = <FriendForm updateFriendsList={this.updateFriendsList} updateID={this.state.updateID} clicked={this.state.clicked}/>
    }
    return (
      <div className="App">
      <h1>Your Friends</h1>
        <Cards friends={this.state.friends} deleteFriend={this.deleteFriend} selectUpdateID={this.selectUpdateID}/>
        {form}
        {/* <FriendForm updateFriendsList={this.updateFriendsList} updateID={this.state.updateID} clicked={this.state.clicked}/> */}
      </div>
    );
  }
}

export default App;
