import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import Friends from './components/friends';

let url = 'http://localhost:5000/friends';

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
      .get(url)
      .then(res => {
        // console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearFields = e => {
    e.preventDefault();
    this.setState({
      inputName: "",
      inputAge: "",
      inputEmail: "",
    });
  }

  addFriend = (name, age, email) => {
    // e.preventDefault();
    if(this.state.inputName && this.state.inputAge && this.state.inputEmail){
      axios
        .post(url, {name, age , email})
        .then(res => {
          console.log(res)
          this.setState({
            data: res.data,
          });
        })
        .catch( err => {
          console.log('something went wrong trying to post new data')
        });
    }
    else {
      alert("All input fields required to add data!");
    }
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <div>
          {/* <h2>Hello there Friends</h2> */}
          <nav>
            <NavLink to='/' ><div className='navLink'>Home</div></NavLink>
            <NavLink to='/friends' ><div className='navLink'>Friends List</div></NavLink>
          </nav>
          <Route 
            path={`/friends`} 
            render={ 
              props => 
              <Friends {...props} 
              info={this.state} 
              handleChange={this.handleChange} 
              clearFields={this.clearFields}
              addFriend={this.addFriend}
              />
            } 
          />
        </div>
      </div>
    );
  }
}

export default App;
