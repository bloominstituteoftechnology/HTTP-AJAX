import React, { Component } from 'react';
import FriendList from './components/FriendList';

// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: [],
      inputName:"",
      inputAge: "",
      inputEmail:""
    }
  }

  handleNameChange = event => {
    this.setState({ inputName: event.target.value
    })
  }
  handleAgeChange = event => {
    this.setState({ inputAge: event.target.value
    })
  }
  handleEmailChange = event => {
    this.setState({ inputEmail: event.target.value
    })
  }
  
  handleAddFriend = event => {
    event.preventDefault();
    if (this.state.inputName && this.state.inputAge && this.state.inputEmail){

      axios.post('http://localhost:5000/friends', 
                {id: (this.state.friends.length + 1),
                name: this.state.inputName,
                age: this.state.inputAge,
                email: this.state.inputEmail })
            .then(response => {
            // console.log(response);
                this.setState({friends: [...response.data], 
                              inputName:"",
                              inputAge: "",
                              inputEmail:""
                              })
                })
            .catch(err => console.log(err));


      
    }
    // console.log(this.state.freiends);
   
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
      .then(response => {
      // console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
    
  }

  render() {
    return (
      <div>
          <h2>Add New Friend:</h2> 
          <form>
            First name: 
            <input type="text" value={this.state.inputName} onChange={this.handleNameChange} /><br></br>
            Age: 
            <input type="number" name="age" value={this.state.inputAge} onChange={this.handleAgeChange} /><br></br>
            E-mail: 
            <input type="text" name="email" value={this.state.inputEmail} onChange={this.handleEmailChange} />
            <button onClick={this.handleAddFriend}>Save</button>
          </form>
          <FriendList friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
