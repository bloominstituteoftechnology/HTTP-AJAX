import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends/Friends';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import AddFriend from './components/AddFriend/AddFriend';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: '',
      // newFriend: {
      //   name: '',
      //   age: '',
      //   email: '',
      // },
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error =>
        console.error(`Friends request produced an error: ${error}`)
      );
  }

  handleChangeName = event => {
    this.setState({ newName: event.target.value });
  };

  handleChangeAge = event => {
    this.setState({ newAge: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ newEmail: event.target.value });
    // const email = this.state.newFriend.email;
    // this.setState({ email: event.target.value });

  };

  handleSubmit = event => {
    event.preventDefault();

    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };

    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        // console.log(res.data);
        this.setState({
          friends: [...res.data],
          // newFriend: {
          //   name: '',
          //   age: '',
          //   email: '',
          // },
          newName: '',
          newAge: '',
          newEmail: '',
        })
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <div className="FriendList">
          <header>
            <h2>Friends List:</h2>
          </header>
          <Friends friends={this.state.friends} />
        </div>

        {/* {this.state.friends.map(friend => {
          return <Friends friend={friend} key={friend.id} />;
        })} */}
        {/* <AddFriend name={this.state.newName} age={this.state.newAge}  email={this.state.newEmail} /> */}
       
        <Form className="FriendForm">
          <h2>Friend Form:</h2>

          <FormGroup>
            <Label for="Name">Name: </Label>
            <Input type="text" name="name" id="name" placeholder="Add name" autoComplete="name" onChange={this.handleChangeName} value={this.state.newName} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age: </Label>
            <Input type="number" name="age" id="age" placeholder="Add age" onChange={this.handleChangeAge} value={this.state.newAge} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input type="email" name="email" id="email" placeholder="Add email" autoComplete="email" onChange={this.handleChangeEmail} value={this.state.newEmail} />
          </FormGroup>
          <Button color="primary" className="btn-add" onClick={this.handleSubmit}>
            Add Friend
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
