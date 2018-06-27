import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsDisplay from './Components/FriendsDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friendsData: [],
      name: "", 
      age: "",
      email:"",
      nameplaceholder:"Add Name",
      emailplaceholder:"Add Email",
      ageplaceholder:"Add Age"
     };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmitFriend = () => {
    const name = { name: this.state.name, email:this.state.email, age: this.state.age };
    axios
      .post("http://localhost:5000/Friends", name)
      .then(response => {
          console.log("POST RESPONSE", response);
          this.setState({ friendsData: response.data});
      })
      .catch(error => console.log(error));
  };

  // handleSubmitEmail = () => {
  //   const email = { email: this.state.email };
  //   axios
  //     .post("http://localhost:5000/Friends", email)
  //     .then(response => {
  //         console.log("POST RESPONSE", response);
  //         this.setState({ friendsData: response.data, email: ""});
  //     })
  //     .catch(error => console.log(error));
  // };

  handleNameChange = e => {
    this.setState({ name: e.target.value});
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value});
  }

  handleAgeChange = e => {
    this.setState({ age: Number(e.target.value)});
  }



  render() { 
    return (
      <div>
        <h1>Friends AXIOS</h1>
        <form>
        <input 
          type="text"
          placeholder={this.state.nameplaceholder}
          onChange={this.handleNameChange}
          value={this.state.name}
          />
        <input 
          type="text"
          placeholder={this.state.emailplaceholder}
          onChange={this.handleEmailChange}
          value={this.state.email}
          />
        
        <input 
          type="number"
          placeholder={this.state.ageplaceholder}
          onChange={this.handleAgeChange}
          value={this.state.age}
          />
        <button onSubmit={this.handleSubmitFriend} onClick={this.handleSubmitFriend}>Submit Friend</button>
        </form>
        <FriendsDisplay 
          friends={this.state.friendsData}
          />

      </div>
      );
  }
}
 
export default App;
