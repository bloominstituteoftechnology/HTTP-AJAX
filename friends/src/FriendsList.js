import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import './FriendsList.css';

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err))
  }

  handleChange = (event) => { this.setState({[event.target.name]: event.target.value}) }

  buttonSubmit = () => {
    const { name, age, email } = this.state
    axios.post('http://localhost:5000/friends', { name, age, email })
      .then( (response) => {
        this.setState({ friends: response.data, name: '', age: '', email: '' })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Friends</h1>
        </header>
        <h3>Add Friends:</h3>
        <input type="text" placeholder="Enter name" name="name" onChange={this.handleChange} value={this.state.name} />
        <input type="number" placeholder="Enter age" name="age" onChange={this.handleChange} value={this.state.age} />
        <input type="text" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email} />
        <button onClick={this.buttonSubmit}>Submit</button>
        <div className="Friends">
            {this.state.friends.map(friend => {
                return (
                    <div key={friend.id} className="friend">
                        <Card>
                            <CardBody>
                                <CardTitle>Name: {friend.name}</CardTitle>
                                <CardText>Age: {friend.age}</CardText>
                                <CardText>Email: {friend.email}</CardText>
                                <Button>Click to expand</Button>
                            </CardBody>
                        </Card>
                    </div>
                );
            })}
         </div>
      </div>
    );
  }
}

export default FriendsList;