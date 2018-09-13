import React, { Component } from 'react';
import logo from './logo.svg';
import Friends_Logo from './Friends_Logo.svg';
import './App.css';
import axios from 'axios';
import FriendContainer from './components/FriendContainer';
import FriendForm from './components/FriendForm';
import { Link, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';


const resetFormValues = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      friendObject: {
        name: '',
        age: '',
        email: ''
      }// friend object
    }
  }

  componentDidMount() {    
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friendsList: response.data });
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  handleTextChange = event => {
    this.setState({
      friendObject: {
        ...this.state.friendObject,
        [event.target.name]: event.target.value
      }
    });
  }

  handleAddNewFriend = event => {    
    axios.post('http://localhost:5000/friends', this.state.friendObject)
      .then(response => this.setState({
        friendsList: response.data,
        friendObject: resetFormValues
      }))
  }


  render() {
    return (
      <div className="App">
      
        <header className="App-header">  
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
          <NavLink to='/friend-form'>Add-A-Friend</NavLink>
        </header>                
        
        <div>
          <Route exact path='/' component={Home} />
          <Route 
            exact path='/friends'
            render={props => (
              <FriendContainer {...props} friends={this.state.friendsList} />
            )}
          />
          <Route 
            path='/friend-form' 
            render={props => (
              <FriendForm
                {...props}
                handleAddNewFriend={this.handleAddNewFriend}
                handleTextChange={this.handleTextChange}
                friendObject={this.state.friendObject}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;

// Inside your React application, create a component to display the list of friends coming from the server.
