import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';
import AddFriendForm from './Components/AddFriendForm';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], loading: true };
  }

  componentDidMount(){
    axios.get(url)
      .then(response => {
        this.setState( {data: response.data, loading: false} )
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateList(newList) {
    this.setState( { data: newList } )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url, {
      name: event.target.name.value,
      age: event.target.age.value,
      email: event.target.email.value
    })
    .then((res) => {
      this.setState({data:res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.data} loading={this.state.loading} />
        <AddFriendForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
