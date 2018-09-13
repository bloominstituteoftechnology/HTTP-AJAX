import React, { Component } from 'react';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
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
      }
    }
  }

  handleChange = event => {
    this.setState({ 
      friend: { ...this.state.friend,
                [event.target.name]: event.target.value}
    })
  }
  // handleAgeChange = event => {
  //   this.setState({ inputAge: event.target.value
  //   })
  // }
  // handleEmailChange = event => {
  //   this.setState({ inputEmail: event.target.value
  //   })
  // }
  
  handleAddFriend = event => {
    event.preventDefault();
    if (this.state.friend.name && this.state.friend.age && this.state.friend.email){
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
                     this.history.push("/");
                  })
              .catch(err => console.log(err));
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
      .then(response => {
      // console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          
          <Route  exact
                  path="/"
                  render={props =>  
                          <FriendList {...props}        
                                      friends={this.state.friends} /> } />
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
