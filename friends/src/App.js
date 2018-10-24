import React from 'react';
import './App.css';
import axios from 'axios';
import { Button, FormGroup, Label, Input } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends:[],
      error: '', 
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        this.setState({ error: "Something doesn't feel right."})
      })
  }

  targetChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitNewFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      id: (this.state.friends.length + 1)
    }
    axios.post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({ 
          friends: response.data,
          name: '',
          email: '',
          age: ''
        })
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log('Error:', err);
      })
  }

  updateFriend = (id) => {
    const updatedFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    }
    axios.put(`http://localhost:5000/friends/${id}`, {
      updatedFriend
    })
      .then(response => {
        console.log("this worked", updatedFriend, response.data)
        this.setState({ 
          friends: response.data,
          name: '',
          email: '',
          age: ''
        })
      })
      .catch(err => {
        console.log('Error:', err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>'Sup?</h1>
        <p>Please add more friends. I'm lonely.</p>
        <FormGroup>
          <Label for='name' >Name  </Label>
          <Input type='text' name='name' label={this.state.name} onChange={this.targetChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Email  </Label>
          <Input type='email' name='email' label={this.state.email} onChange={this.targetChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Age  </Label>
          <Input type='text' name='age' label={this.state.age} onChange={this.targetChange}/>
        </FormGroup>
        <Button onClick={this.submitNewFriend} >Submit</Button>
        <p>    To Update a Friend's Info: Fill in the boxes above and click "Update" on the friend below</p>
        <p>--------</p>
        <p>Here are the friends I already have.</p>
        {this.state.friends.map(item => {
          return (
            <div key={item.id} >
              <p>{item.name} --> Age: {item.age} </p>
              <p>{item.email} {}</p>
              <Button onClick={() => this.deleteFriend(item.id)} >X Delete</Button>
              <Button onClick={() => this.updateFriend(item.id)} >Update</Button>
              <p>--------</p>
            </div>
        )})}
      </div>
    );
  }
}

export default App;
