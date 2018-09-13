import React, { Component } from 'react';
import logo from './logo.svg';
import Friends_Logo from './Friends_Logo.svg';
import './App.css';
import axios from 'axios';
import FriendContainer from './components/FriendContainer';
import FriendForm from './components/FriendForm';
import { Link, Route } from 'react-router-dom';


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



  render() {
    return (
      <div className="App">
      
        <header className="App-header">                   
        </header>        
        <div className='friend-list'>        
          <FriendContainer friends={this.state.friendsList} />
        </div>

        <div className='friend-form'>
          <h3>Are we Missing a friend?</h3>
          <Link to='/friend-form'>Add-A-Friend</Link>
          {/*Friend form here*/}
        </div>
        <div>
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
