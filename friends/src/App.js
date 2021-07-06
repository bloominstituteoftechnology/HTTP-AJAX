import React, { Component } from 'react';
import Friends from './component/Friends';
import InputForm from './component/InputForm';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err))
  }

  handleSubmit = (newFriend) => {
    axios.post("http://localhost:5000/friends", newFriend)
    .then(res => {
      const friends = res.data;
      this.setState({ friends });
    })
    .catch(err => console.log(err))
  }

  handleEdit = (id, friendData) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friendData)
      .then(res => {
        const friends = res.data;
        this.setState({friends})
      })    
      .catch(err => console.log(err));
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        const friends = res.data;
        this.setState({friends})
      })
      .catch(err => console.log(err));
  }

  render() {
      const { friends } = this.state
      console.log(friends)
      return (
       <div>
         <div className="heading">Friends</div>
          <InputForm handleSubmit={this.handleSubmit} />
          <Friends friends={friends} handleDelete={this.handleDelete}/>
        </div>
      );
  }
}

export default App;
