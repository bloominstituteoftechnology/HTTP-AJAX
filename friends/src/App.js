import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Contact from './Contact';
import ContactForm from './ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
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
                address={friend.email} />
            ))}
          </div>
          <ContactForm />
        </section>
      </div>
    );
  }
}

export default App;
