import React, { Component } from 'react';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import {Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: [],
      friend: {
        id: "",
        name: "",
        age: "",
        email: ""
      },
      isUpdate:false
    }
  }

  handleChange = event => {
    this.setState({ 
      friend: { ...this.state.friend,
                [event.target.name]: event.target.value}
    })
  }

  handleAddFriend = event => {
    event.preventDefault();
    if (this.state.friend.name && this.state.friend.age && this.state.friend.email){
      if (!this.state.isUpdate){
          axios.post('http://localhost:5000/friends', 
                    { name: this.state.friend.name,
                      age: this.state.friend.age,
                      email: this.state.friend.email })
                .then(response => {
                      this.setState({ friends: [...response.data],
                                      friend:{  id:"",
                                                name:"",
                                                age: "",
                                                email:""} 
                                    });
                    })
                .catch(err => console.log(err));
      } else{
          axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, 
                  { name: this.state.friend.name,
                    age: this.state.friend.age,
                    email: this.state.friend.email })
              .then(response => {
                    this.setState({ friends: [...response.data],
                                    friend:{  id:"",
                                              name:"",
                                              age: "",
                                              email:""},
                                    isUpdate:false 
                                  });
                  })
              .catch(err => console.log(err));
      }
    }
  }

  handleUpdateFriend=(event,friendId)=>{
    event.preventDefault();
    this.setState({friend: this.state.friends[friendId-1],
                  isUpdate: true});
    console.log(this.state);
  }

  handleDeleteFriend=(event, friendBeingDeleted)=>{
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friendBeingDeleted.id}`, friendBeingDeleted)
              .then(response => {
                     this.setState({ friends: [...response.data]
                                  });
                  })
              .catch(err => console.log(err));
  }

  componentDidMount(){
    // console.log(this.props.history);
    axios
    .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          {/* <Route  path="/:id"
                  render={props =>
                          <Friend {...props}
                                  friends={this.state.friends}
                                  handleDeleteFriend={this.handleDeleteFriend}
                                  handleUpdateFriend={this.handleUpdateFriend}/>}/> */}
          <Route  exact
                  path="/"
                  render={props =>  
                          <FriendList {...props}        
                                      friends={this.state.friends}
                                      handleDeleteFriend={this.handleDeleteFriend}
                  handleUpdateFriend={this.handleUpdateFriend}/>}/>
          
          <Route  path="/form"
                  render={props =>
                          <FriendForm {...props} 
                                      friend={this.state.friend}
                                      handleChange={this.handleChange}
                                      handleAddFriend={this.handleAddFriend}/> }/>
          
      </div>
    )
  }
}

export default App;
