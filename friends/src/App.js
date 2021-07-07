import React, { Component } from 'react';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import {Route,NavLink, withRouter} from 'react-router-dom';
import './App.css';

import axios from 'axios';
//const axios = require('axios');

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          friends: [],
          friend: {
            name:'',
            age:'',
            email:''
          }
        }
      }

       componentDidMount() {
          axios
           .get('http://localhost:5000/friends')
             .then(response => {
               this.setState({friends: response.data})
            
            

          } )
            .catch((err) => console.error(`Error! ${err}`))

        }

        handleChange = event => {
          this.setState({
            friend:{
              ...this.state.friend, [event.target.name]: event.target.value
            }
          });
        };
        
        handleSubmit = event => {
          event.preventDefault();
          axios
            .post('http://localhost:5000/friends', this.state.friend)
            .then(response => {
              this.setState(
                {
                  friends: response.data,
                  friend: { name: '', age: '', email: '' }
                },
                () => this.props.history.push('/')
              );
            })
            .catch(err => {
              console.log(err);
            });
        };
          
        handleDelete = id => {
          axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => this.setState({ friends: response.data }));
        };
          

        render() {
          return (
            <div className="App">
              <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addfriend">Add New Friend</NavLink>
              </ul>
              <Route
                exact
                path="/"
                render={props => (
                  <FriendsList {...props} friends={this.state.friends} />
                )}
              />
      
              <Route
                path="/addfriend"
                render={props => (
                  <FriendForm
                    {...props}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    friend={this.state.friend}
                  />
                )}
              />
              <Route
                path="/friends/:id"
                render={props => (
                  <Friend
                    {...props}
                    handleDelete={this.handleDelete}
                    friends={this.state.friends}
                  />
                )}
              />
            </div>
          );
        }
  }
  

export default App;
