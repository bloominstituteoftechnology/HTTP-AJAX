import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log("IN CATCH", err);
      });
  }


  addNewFriend = e => {
    e.preventDefault();
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    Axios
      .post("http://localhost:5000/friends", newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: "",
          id:""
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {

  
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    Axios
      .put(`http://localhost:5000/friends/${this.state.id}`, newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));

  };

  deleteFriend = id => {
    
    return () => {
      Axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(response =>
          this.setState({
            friends: response.data,
            name: "",
            age: "",
            email: ""
          })
        )
        .catch(err => console.log(err));

      console.log(id);
    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.id)
  };  

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.state.friends.map(friend => {
          return (
            <div>
              <h3>{friend.name}</h3> {""}
              <span>{friend.age} {""}</span>
              <br/>
              <span>{friend.email}</span><br />
            
              <input type='submit' onClick={this.deleteFriend(friend.id)} value='Delete' />
            </div>
          );
        })}


        <input
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          type="text"
          placeholder="Name"
          
        />{" "}
        {""}
        <input
          onChange={this.handleChange}
          name="age"
          value={this.state.age}
          type="number"
          placeholder="age"
          
        />{" "}
        <input
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          type="email"
          placeholder="Email"
          
        />
         <input
          onChange={this.handleChange}
          name="id"
          value={this.state.id}
          type="id"
          placeholder="id update only"
          
        />   
          <input type="submit" onClick={this.addNewFriend} value='add' />
      <input type="submit" onClick={this.updateFriend} value='update' />

           
      </div>
    );
  }
}

export default App;