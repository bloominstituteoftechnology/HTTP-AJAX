import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import axios from "axios";
import logo from './logo.svg';
import './App.css';

import FriendsList from './components/FriendsList'
import Friends from './components/Friends'
import Home from './components/Homes'

class App extends Component {
  constructor(props){
    super (props)
    this.state = {
      personaldata: [],
        name :'',
        age:'',
        email:'',
      }

    }
  
        componentDidMount (){
          axios
          .get("http://localhost:5000/friends")
          .then(response => {
        
            this.setState({ personaldata: response.data });
          })
          .catch(err => {
            console.log("IN CATCH", err);
          });
        }
        inputChangeHandler = (ev) =>{
          const name = ev.target.name
        this.setState({[name] : ev.target.value});
        
        }
      submitnewfriend =(ev) => {
        ev.preventDefault();
        const friend = {
          name :this.state.name,
          age:this.state.age,
          email:this.state.email
        }
        axios
      .post("http://localhost:5000/friends",{ name :this.state.name,
      age:this.state.age,
      email:this.state.email })
      .then(response => {
        this.setState({ personaldata: response.data })
        
      })
      .catch(err => {
        console.log("IN CATCH", err);
      });

          console.log(friend )
          
          this.state.name=''
          this.state.age=''
          this.state.email=''
      }
      deleteFriendHandler = id =>{
        return() =>{
          axios
          .delete(`http://localhost:5000/friends/${id}`)
          .then(response => {
            this.setState({ personaldata: response.data })
            
          })
          .catch(err => {
            console.log("IN CATCH", err);
          });
      }
    }
  render() {
    return (
      <div className="container">
       <nav className='nav nav-pills nav-justified'>
          <NavLink exact activeClassName="selected" className="nav-item nav-link " to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link " to="/friends">
            Friends
          </NavLink>
        </nav>
      <Route exact path="/" component={Home} />
      <Route exact
          path="/friends"
          render={() => <FriendsList 
            data={this.state.personaldata}
            inputChangeHandler={this.inputChangeHandler}
            submitnewfriend ={this.submitnewfriend} 
            name ={this.state.name}
            age={this.state.age}
            email={this.state.email}
            deleteFriendHandler={this.deleteFriendHandler}
          />} />
      

      <Route
       
        path="/friends/:id"
        render={props => 
          <Friends  
          datauser={this.state.personaldata} 
          {...props}
          deleteFriendHandler={this.deleteFriendHandler}/>
        }
        />
        </div>
    );
  }

}
export default App;
