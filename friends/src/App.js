import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import HomePage from './components/homePage';
import Friends from './components/friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        // console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch(err => {
        // console.log(err);
      })
  }


  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <div>
          <h2>Hello there Friends</h2>
          <nav>
            <NavLink to='/' component={HomePage}><div className='navLink'>Home</div></NavLink>
            <NavLink to='/friends' component={HomePage}><div className='navLink'>Friends List</div></NavLink>
            <NavLink to='/addFriend' component={HomePage}><div className='navLink'>Add Friend</div></NavLink>
          </nav>
          <Route 
            path={`/friends`} 
            render={ props => <Friends {...props} info={this.state.data} />} 
          />
          {/* <Friends info={this.state.data} /> */}
        </div>
      </div>
    );
  }
}

export default App;
