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

handleFormEvent = event => {
  alert("I was clicked");
}
/*formLoad() {
    if(this.state.displayForm === true) {
      <Form />
    }
}*/

changeHandler = (event) => {
    this.setState({ 
        newFriend  : { [event.target.name] : event.target.value } })
}

addFriend = (event) => {
  event.preventDefault()
  axios
     .post('http://localhost:5000/friends' , this.state.newFriend)
     .then(response => this.setState({ items : response.data}))
}

render() {
    console.log("Rendering", this.state.friends)
    return (
      <div className="App">
        <h1>HTTP....</h1>
          <Friend 
              friend = {this.state.friends}
              handleFormEvent = {this.handleFormEvent}
          />

          {/*TRYING FORM FOR ADD FRIEND....*/}
          <form onSubmit={this.addFriend}>
              <div> Name : <input type = 'text' onChange = {this.changeHandler} name = "name" value = {this.state.newFriend.name} /> </div>
              <div> Age : <input type = 'text' onChange = {this.changeHandler} name = "age" value = {this.state.newFriend.age} /> </div>
              <div> Email : <input type = 'text' onChange = {this.changeHandler} name = "email" value = {this.state.newFriend.email}/> </div>
              <button >Add Friend</button>
          </form>
          
      </div>
    );
  } //render
} //App component

export default App;
