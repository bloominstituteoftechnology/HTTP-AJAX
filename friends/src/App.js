import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from "react-router-dom";
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {

  constructor(){
    super();
    this.state ={
      friends: [],
      editFriend: {}
    }
  }

componentDidMount(){
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response);
          this.setState({ friends: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }

    addToList = (obj) => {
    
      axios.post('http://localhost:5000/friends', obj)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  
    }

    updateToList = (id, obj) => {
      console.log(id);
      axios 
        .put(`http://localhost:5000/friends/${id}`, obj)
        .then(response => {
          console.log(id);
          this.setState({
            friends:response.data
          })
        })
        .catch(err => console.log(err));
    }

    startUpdate = (obj) =>{
       this.setState({
          editFriend: obj
       })
    }


    


  render() {
    return (
      <div className="App">
        <FriendForm  addToList={this.addToList} updateToList={this.updateToList} editFriend={this.state.editFriend} friends={this.state.friends}/>
        <FriendsList friends={this.state.friends} startUpdate={this.startUpdate}/>
      </div>
    );
  }
}

export default App;
