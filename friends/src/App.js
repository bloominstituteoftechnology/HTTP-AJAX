import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
       friends:[],
       name: '',
       age: '',
       email: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(response => {
            //  console.log(response.data);
             this.setState({
                 friends:response.data
             });
         })
         .catch( error => {
             console.log("Error:", error);
         })
  }

  inputChangeHandler = (event) => {
      const name = event.target.name;
      this.setState({
         [name] : event.target.value
      })
      
  }

  submitHandler = (event) => {
     event.preventDefault();
     
     axios.post("http://localhost:5000/friends", {
      friend: {
        name : this.state.name,
        age : this.state.age, 
        email: this.state.email
      }
     })
       .then( response =>  {
            this.setState({friends : response.data})
      })
      .catch( error => console.log(error))
  }

  render() {
     const {name, age, email } = this.state;
    return (
      <div className="App">
         <Friends className='friends' friends={this.state.friends} inputChangeHandler={this.inputChangeHandler }
                                  submitHandler = {this.submitHandler} name = {name} age ={age} email = {email} />
      </div>
    );
  }
}

export default App;
