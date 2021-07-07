import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import FriendsList from "./FriendsList";
import axios from "axios";


import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }; 
  }
  

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (    
      <div className="App">        
        <h1>This is my project about friends</h1> 
        <nav>
          <NavLink to='friends-list'>Friends List</NavLink>
        </nav>
        <Route 
          path='/friends-list'
          render={props => (
            <FriendsList 
              {...props}
              friends={this.state.friends}
            />
          )}
        />
      </div>      
    );
  }
}

export default App;
