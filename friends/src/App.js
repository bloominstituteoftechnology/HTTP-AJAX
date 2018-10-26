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
      const value = event.target.value;
      if(value) {
      this.setState({
         [name] : value
      })
    }
      
  }

  submitHandler = (event) => {
     event.preventDefault();
     if(this.state.name && this.state.age && this.state.email) {
     axios.post("http://localhost:5000/friends", {
       
        name : this.state.name,
        age : this.state.age, 
        email: this.state.email
      
     })
       .then( response =>  {
            this.setState({friends : response.data})
            console.log(response);
      })
      .catch( error => console.log(error))
      this.setState({name: '', age: '', email: ''});
    } 
  }

  deleteFriendHandler = (id) => {
      axios.delete(`http://localhost:5000/friends/${id}`)
      .then( response => {
         this.setState({
               friends:response.data
          });
      })
      .catch( error => {
          console.log(error);
      })
  }

  updateFriendHandler = (id, name, age, email) => {
      this.setState({
         name: '',
         age: '',
         email: ''
      })
     axios.put(`http://localhost:5000/friends/${id}`, {
         name : name,
         age : age,
         email : email
      })
      .then(response => console.log(response.data))
      .catch( error => console.log(error))
  }

  render() {
     const {name, age, email } = this.state;
    return (
      <div className="App">
         <Friends className='friends' friends={this.state.friends} inputChangeHandler={this.inputChangeHandler }
                                  submitHandler = {this.submitHandler} name = {name} age ={age} email = {email}
                                  deleteFriendHandler = {this.deleteFriendHandler} 
                                  updateFriendHandler = {this.updateFriendHandler} />
      </div>
    );
  }
}

export default App;
