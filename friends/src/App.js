import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsDisplay from './Components/FriendsDisplay';
import FriendsForm from './Components/FriendsForm';
import { Route } from 'react-router-dom';
import Friend from './Components/Friend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friendsData: [],
      
     };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // handleDelete = id => {
  //   axios.delete("http://localhost:5000/Friends", id )
  //     .then(response => {
  //       this.setState({ friendsData: response.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // handleSubmitFriend = () => {
  //   const name = { name: this.state.name, email:this.state.email, age: this.state.age };
  //   axios
  //     .post("http://localhost:5000/Friends", name)
  //     .then(response => {
  //         console.log("POST RESPONSE", response);
  //         this.setState({ friendsData: response.data});
  //     })
  //     .catch(error => console.log(error));
  // };

  // handleSubmitEmail = () => {
  //   const email = { email: this.state.email };
  //   axios
  //     .post("http://localhost:5000/Friends", email)
  //     .then(response => {
  //         console.log("POST RESPONSE", response);
  //         this.setState({ friendsData: response.data, email: ""});
  //     })
  //     .catch(error => console.log(error));
  // };

  handleSetData = data => {
    this.setState({ friendsData: data});
  }

  // handleEmailChange = e => {
  //   this.setState({ email: e.target.value});
  // }

  // handleAgeChange = e => {
  //   this.setState({ age: Number(e.target.value)});
  // }



  render() { 
    return (
      <div>
        <h1>Friends AXIOS</h1>
        <FriendsForm handleSetData={this.handleSetData} />
        {/* <form>
        <input 
          type="text"
          placeholder={this.state.nameplaceholder}
          onChange={this.handleNameChange}
          value={this.state.name}
          />
        <input 
          type="text"
          placeholder={this.state.emailplaceholder}
          onChange={this.handleEmailChange}
          value={this.state.email}
          />
        
        <input 
          type="number"
          placeholder={this.state.ageplaceholder}
          onChange={this.handleAgeChange}
          value={this.state.age}
          />
        <button onSubmit={this.handleSubmitFriend} onClick={this.handleSubmitFriend}>Submit Friend</button>
        <button onClick={this.handleDelete}>Delete</button>
        </form> */}
        {/* <FriendsForm
          // onChange={this.handleAgeChange}
          // onChange={this.handleEmailChange}
          // onChange={this.handleNameChange}
          // input={this.name}
          // input={this.state.email}
          // input={this.state.age}
          // onSubmit={this.handleSubmitFriend}
          // onClick={this.handleSubmitFriend}
          // placeholder={this.state.emailplaceholder}
          // placeholder={this.state.ageplaceholder}
          // placeholder={this.nameplaceholder}
          /> */}
        <Route  path='/' render={(props) => <FriendsDisplay {...props} handleSetData={this.handleSetData} nuts={this.state.friendsData} />} />
        {/* <Route path='/friends/:id' render={(props) => <Friend {...props} friend={this.state.friendsData} />} /> */}
        {/* <FriendsDisplay 
          nuts={this.state.friendsData} 
          /> */}

      </div>
      );
  }
}
 
export default App;
