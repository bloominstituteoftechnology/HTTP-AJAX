import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import axios from "axios";
import { BrouserRouter as Router, Route, NavLink } from 'react-router-dom';
import Form from '../src/components/Form';
import Home from './components/Home';
import Friends from './components/Friends';

import './App.css';

let url = "http://localhost:5000/friends";


class App extends Component {
  constructor(){
    super();
    this.state = {
      stateFriendsData: []

    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then( response => {
        console.log(response);
        this.setState({ stateFriendsData: response.data })
      })
      .catch(err =>{
        console.log(err);
      });

  }


  addFriend = data => {
    axios
    .post(url, data )
    .then(response => {
      console.log (response);
      this.setState({stateFriendsData: response.data })
    })
      .catch(err => console.log(err));
  };


  delete = id => {
    axios
    .delete(`${url}/${id}`)
      .then(response => this.setState({ stateFriendsData: response.data }))
      .catch(err => console.log(err));
  };

  update = (id, data) => {
    axios
    .put (`${this.state.url}/${id}`, data)
      .then(response => this.setState({ stateFriendsData: response.data}))
    .catch (err => console.log (err));

  };

  render() {
    return (
      <div className="App">
      <div className="Nav" >
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/Form">Form</NavLink>
      <NavLink to="/Friends">Friends</NavLink>

      </div>

      <Route exact path="/" component={Home} />
        <Route path="/Form" render={props => <Form {...props} addFriend={this.addFriend}  />} />
        
      
      <Route path="/Friends" 
        render={(props) => {
          return(
            <Friends 
              {...props}
              allFriendsList={this.state.stateFriendsData}
              onDelete={this.delete}
              onUpdate={this.update}
            />

          )
           }} />

      </div>
    );
  }
}


export default App;
