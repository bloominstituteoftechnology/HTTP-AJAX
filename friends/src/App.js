import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import Friends from './components/friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [],
      inputName: '',
      inputAge: '',
      inputEmail: '',
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target.name);
    console.log(this.state.inputName);
  }

  clearFields = e => {
    e.preventDefault();
    this.setState({
      inputName: "",
    });
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <div>
          <h2>Hello there Friends</h2>
          <nav>
            <NavLink to='/' ><div className='navLink'>Home</div></NavLink>
            <NavLink to='/friends' ><div className='navLink'>Friends List</div></NavLink>
          </nav>
          <Route 
            path={`/friends`} 
            render={ props => <Friends {...props} info={this.state.data} handleChange={this.handleChange} clearFields={this.clearFields}/>} 
          />
        </div>
      </div>
    );
  }
}

export default App;
