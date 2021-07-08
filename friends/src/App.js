import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './friendslist';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: " ",
      age: " ",
      email: " "
    };
  }

    componentDidMount() {
      axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error =>{
        console.log(error);
      });
    };


    onPostRequest = (event) => {
      if(this.state.name && this.state.age && this.state.email){
        const { name, age, email} = this.state;
        axios.post('http://localhost:5000/friends', { name, age, email})
        .then((result => { console.log("success")}))
        .catch((error =>
           console.log(error)));
        }
      };

    onDeleteRequest = (id) => {
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          this.setState({ friends: response.data});
          console.log("Delete successful",response.data, id);

        })
        .catch(error => {
          console.log()
        })
    }

  handleInputData = (event) => {
    const friends = this.state.friends;
    friends[event.target.name] = event.target.value;
    this.setState({ [event.target.name]: event.target.value })
  }


    

  
  render() {
    console.log("render method" ,this.state.friends);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FriendsList friends={this.state.friends} delete={this.onDeleteRequest}/>
        <form>
          <label>
            Name:
             <input type="text" name="name" value={this.state.name} onChange={this.handleInputData} />
            age:
             <input type="text" name="age" value={this.state.age} onChange={this.handleInputData} />
            email:
             <input type="text" name="email" value={this.state.email} onChange={this.handleInputData} />
          </label>
          <button type="submit" onClick={this.onPostRequest}>Submit</button>
          
        </form>
      </div>
    );
  }
}

export default App;

