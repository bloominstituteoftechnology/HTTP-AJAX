import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Contact from './Contact';
import ContactForm from './ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        email: '',
        age: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
  }
  

  changeHandler = event => {
    this.setState({ 
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value,
      }
    });
  }


  addContact = ev => {
    ev.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ 
        friends: response.data, 
        newFriend: {
          name: '',
          age: '',
          email: ''
        }
      }))
      .catch(error => console.log(error));
  };

  deleteContact = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>My Contacts</h1>
        <section className="contacts">
          <div className="contactCards">
            {this.state.friends.map( friend => (
              <Contact 
                key={friend.id}
                name={friend.name}
                age={friend.age}
                address={friend.email}
                delete={this.deleteContact} />
            ))}
          </div>
          <ContactForm 
            addNew={this.addContact}
            formInputHandler={this.changeHandler}
            newFriend={this.state.newFriend} />
        </section>
      </div>
    );
  }
}

export default App;
