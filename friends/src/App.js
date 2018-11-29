import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';

class App extends Component {
  constructor() {
    super();

    this.state = {
        friends: [],
    };
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            console.log('Response', res.data)
            this.setState(() => ({ friends: res.data }));
            
        })
        .catch(error => {
        console.error('Server Error', error);
        });
  }

  saveFriend = props => {
    console.log('saveFriend props' , props)
    const newFriend = {
        name: props.name,
        age: props.age,
        email: props.email,
    }
    axios
        .post(`http://localhost:5000/friends`, newFriend)
        .then(res => {
          this.setState({
            friends: res.data
          })
        })
        .catch(err => console.log('axios error on savefriend'));
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path='/'
          render={props => {
            console.log(this.state.friends)
            return (
              <div>
                <FriendsList 
                  {...props}
                  friends={this.state.friends}
                />
                <AddFriend
                  handleChange={this.handleChange}
                  saveFriend={this.saveFriend}
                  name={props.name}
                  email={this.state.email}
                  age={this.state.email}
                />
              </div>
            )
          }
        }
        />
        <Route
          path="/friends/:id"
          render={props => (
            
            <Friend
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
