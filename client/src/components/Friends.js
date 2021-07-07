import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Friend from './Friend';
import '../App.css';
import axios from "axios";
//test
const friendsData = 'http://localhost:5000/friends';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      deleteId: '',
      updateId: '',
      updateName: '',
      name: '',
      age: '',
      email: '',
    }
  }

  handleOnChange = e => { this.setState({[e.target.name]: e.target.value}) };

  componentDidMount() {
    axios.get(friendsData).then(response => {
      this.setState({data: response.data});
    });
  }

  addNewFriend = e => {
    e.preventDefault();

    axios.post(friendsData, {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    })
    .then(response => {
      this.setState({data: response.data})
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({name: '', age: '', email: ''})
  }

  deleteFriend = e => {
    e.preventDefault();
    let chooseId = this.state.deleteId;
    axios.delete(`http://localhost:5000/friends/${chooseId}`)
    .then(response => {
      this.setState({data: response.data})
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({deleteId: ''})
  }

  updateFriend = e => {
    e.preventDefault();
    let chooseId = this.state.updateId;
    let chooseName = this.state.updateName;
    axios.put(`http://localhost:5000/friends/${chooseId}`, {
      name: chooseName
    })
    .then(response => {
      this.setState({data: response.data})
    })
    .catch(error => {
      console.log(error);
    });

    this.setState({updateId: '', updateName: ''})
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <section className="friends-list">
          <h1>List</h1>
          <nav>
            {this.state.data.map((item, index) => <NavLink activeClassName="selected" className="nav-item" to={`/friends/${item.name}`} key={index}>{item.name}</NavLink>)}
          </nav>
        </section>
        <hr />
        <Route path="/friends/:name" render={props => <Friend {...props} data={this.state.data} />} />
        <Route exact path="/friends" render={() => 
          <section className="friend-forms">
            <div>
              <h1>Add A New Person</h1>
              <form onSubmit={this.addNewFriend} action="submit">
                <label htmlFor="name">Enter Name:</label>
                <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                <label htmlFor="age">Enter Age:</label>
                <input id="age" type="number" name="age" value={this.state.age} onChange={this.handleOnChange} />
                <label htmlFor="email">Enter Email:</label>
                <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                <button>Submit</button>
              </form>
            </div>
            <div>
              <h1>Delete A Person</h1>
              <form onSubmit={this.deleteFriend} action="submit">
                <label htmlFor="id">Enter Id:</label>
                <input id="id" type="number" name="deleteId" value={this.state.deleteId} onChange={this.handleOnChange} />
                <button>Submit</button>
              </form>
            </div>
            <div>
              <h1>Update A Person</h1>
              <form onSubmit={this.updateFriend} action="submit">
                <label htmlFor="id">Enter Id:</label>
                <input id="id" type="number" name="updateId" value={this.state.updateId} onChange={this.handleOnChange} />
                <label htmlFor="name">Enter Name:</label>
                <input id="name" type="text" name="updateName" value={this.state.updateName} onChange={this.handleOnChange} />
                <button>Submit</button>
              </form>
            </div>
          </section>
        }/>
      </div>
      
    );
  }
}

export default Friends;
