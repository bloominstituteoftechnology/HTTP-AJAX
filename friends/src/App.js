import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Form from './Components/Form'
import FriendsList from './Components/FriendsList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      updateName: '',
      updateAge: '',
      updateEmail: '',
      update: false,
      id: ''
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    // this.setState({
    //   name: '',
    //   age: '',
    //   email: ''
    // })
    // window.location.reload()
  }

  delete = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  updateForm = (id, name, age, email) => {
    this.setState({
      update: true,
      id: id,
      name: name,
      age: age,
      email: email
    })
  }

  close = event => {
    this.setState({ update: false })
  }

  update = event => {
    event.preventDefault()
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.updateName,
        age: this.state.updateAge,
        email: this.state.updateEmail
      })
      .then(response =>
        this.setState({
          friends: response.data,
          updateName: '',
          updateAge: '',
          updateEmail: '',
          update: false
        })
      )
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <FriendsList 
          friends={this.state.friends}
          delete={this.delete}
          updateForm={this.updateForm}
        />
        {this.state.update && (
          <Form 
            inputChange={this.inputChange}
            submit={this.submit}
            close={this.close}
            nameX="update name"
            ageX="update age"
            emailX="update email"
            name={this.state.updateName}
            age={this.state.updateAge}
            email={this.state.updateEmail}
          />
        )}
        <Form 
          inputChange={this.inputChange}
          submit={this.submit}
          close={this.close}
          nameX="name"
          ageX="age"
          emailX="age"
        />
      </div>
    );
  }
}

export default App;
