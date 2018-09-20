import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './Components/Friend/FrontPage';

const axios = require('axios');


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: '',
    }
  }

  // deleteHandler = (e) => {
  //   axios.delete(`http://localhost:5000/friends/${}`)
  // }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    const user = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    }
    console.log('handleSubmit()')
    axios
      .post('http://localhost:5000/friends', user)
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    console.log('component did mount!')
    axios
      .get('http://localhost:5000/friends')
        .then((res) => {
          this.setState({ friendsData: res.data })
          console.log('Axios response received')


        })
        .catch((err) => {
          console.log('WARNING: error!', err)
        })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Route 
          path="/"
          render={props => (
            <FrontPage 
              {...props}
              stateProps={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
            /> 
          )} 
        />
        <Route 
        path="/friends/:id"
        render={props => (
          <FriendPage 
            {...props}
            friendsData={this.state.friendsData}
          />
        )}
        />
      </div>
        
    );
  }
}

export default App;
