import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { NavLink } from 'react-router-dom';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      stateFriendsData: []

    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then( response => {
        console.log(response);
        this.setState({ stateFriendsData: response.data })
      })
      .catch(err =>{
        console.log(err);
      });

  }


  render() {
    return (
      <div className="App">
      <h1>HTTP / AJAX!</h1>
        <h1>These are friends</h1>
        {this.state.stateFriendsData.map(amigo => (
          <div>
            <NavLink activeClassName={`friendBox${amigo.id}`}>
              <h5>Friend number{` ${amigo.id} `} </h5>
              <h1>Name:{` ${amigo.name} !`}</h1>
              <p>Age:{amigo.age}</p>
              <p>Email:{amigo.email}</p>
              <p>Id:{amigo.id}</p>
            </NavLink>
            
          </div>
        ))}
      </div>
    );
  }
}

export default App;
