import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Friends from './components/Friends';
import AddForm from './components/AddForm'

class App extends Component {
  constructor () {
    super();
    this.state={
      currentname: '',
      currentage: '',
      currentemail:'',
    }
    this.state={
      friends: []
    };
  }

  formChange = (event) => {
    this.setState({
      [`current${event.currentTarget.name}`]:event.currentTarget.value
    });

    console.log(event.currentTarget.value)
  }

  addFriend = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.currentname,
      age: this.state.currentage,
      email: this.state.currentemail
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
  };
  render() {
    return(
      <div className="App">

      <h1>Friends</h1>
      <AddForm formChange = {this.formChange} addFriend = {this.addFriend}/>
      <Friends friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
