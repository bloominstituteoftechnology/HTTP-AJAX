import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import friendsList from './Components/friendsList';


const URL = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData : [],  
      name : "",
      age: "",
      email: "",
    };
  }
  
  componentDidMount() {
    axios
    .get(URL)
    .then(response =>{
      console.log("get response:", response);
      this.setState({friendsData : response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSetData = data => {
    this.setState({friendsData: data})
  }



 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
        </header>
        <friendsList 
        friends = {this.state.friendsData} 
        handleSetData = {this.handleSetData}
         />
      
      </div>
    );
  }
}

export default App
