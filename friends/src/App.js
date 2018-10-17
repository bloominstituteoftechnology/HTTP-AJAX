import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend.js'
import Form from './components/Form.js'


class App extends Component {
  constructor() {
      super();
      this.state = {
        friends : [],
        newFriend : {
                  age : '',
                  name : '',
                  email : ''
              },
        displayForm : false,
      }
  }

componentDidMount() {
    console.log("In CDM");
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends : response.data }))
    .catch(error => console.log(error));
}

formLoad() {
    if(this.state.displayForm === true) {
      <Form />
    }
}

changeHandler = (event) => {
    this.setState({ [event.target.name] : event.target.value})

}

render() {
    console.log("Rendering", this.state.friends)
    return (
      <div className="App">
        <h1>HTTP....</h1>
          <Friend 
              friend = {this.state.friends}
          />
      </div>
    );
  } //render
} //App component

export default App;
