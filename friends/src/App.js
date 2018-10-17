import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
import ListFriend from './components/ListFriend';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data}))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className='friend-contact'>Friend Contact</h1>
          <div>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink to='/list-friend'>
            Friend Contact 
            </NavLink>
          </div>
        </nav>

        <Route exact path='/' compoennt={Home} />
        <Route 
          exact path='/list-friend'
          render={props => (
            <ListFriend 
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
