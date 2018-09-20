import React, { Component, Fragment } from 'react';
import Friends from './Components/Friend/Friends';
import FriendForm from './Components/Friend/FriendForm';

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
    return (
      <Fragment>
        <Route exact path="/" component={FrontPage}/>
      </Fragment>
        
    );
  }
}

export default App;
