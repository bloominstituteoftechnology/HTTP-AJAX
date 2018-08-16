import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import { Route } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      url: url,
      newName: "",
      newAge: "",
      newEmail: ""
    };
  }

  componentDidMount() {
    // console.log("testing axios")
    axios.get(this.state.url).then(response => {
      // console.log(response);

      // console.log(response.data);
      this.setState({
        friendsList: response.data
      });
    });
  }

  handleUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  handleSubmit = event => {
    event.preventDefault();
    // console.log("Got to handle submit: ", event)
    const newInfo = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    axios
      .post(url, newInfo)
      .then(response => {
        this.setState({
          newName: "",
          newAge: "",
          newEmail: "",
          friendsList: response.data
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  //possibily need an if statement

  editFriend = id => {
    const editInfo = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    axios 
      .put(`${url}/${id}`)
      .then(response => {
        this.setState({
          friendsList: response.data

        });
        
      })
      .catch( error => {
        console.log("Error: ", error);
      });

  };
  

  deleteFriend = id => {    
    console.log("deleteFriend:" , id)  
    axios 
      .delete(`${url}/${id}`)
      .then(response => {
        this.setState ({
          friendsList: response.data
        })})
        .catch(error => {
          console.error("Error: ", error);
        });
      
    }
  
  

  render() {
    return (
      <div className="App">
        component with list of friends will be displayed here
        {/* {console.log(props.url)}; */}
        <Route
          path="/"
          component={props => {
            return <Friends {...props} friendsList={this.state.friendsList}
            deleteFriend={this.deleteFriend}
            editFriend={this.editFriend} />;
          }}
        />
        <Route
          path="/"
          render={props => {
            return <FriendForm 
            {...props}
            nameAdd={this.state.newName}
            ageAdd={this.state.newAge}
            emailAdd={this.state.newEmail}
            handleUpdate={this.handleUpdate}
            handleSubmit={this.handleSubmit}/>;
          }}
        />
        {/* <Friends friends={this.state.friendsList}/>  */}
      </div>
    );
  }
}

export default App;
