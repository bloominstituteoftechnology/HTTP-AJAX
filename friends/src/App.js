import React, { Component } from 'react';
import './App.css';
// import axios from "axios";
import Friends from './component/Friends.js';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
// class App extends Component {
  
//   state = {
//     data: [],
//     name : '',
//     email: '',
//     age: 0,
//   }

//   componentDidMount = () => {
//     axios
//       .get('http://localhost:5000/friends')
//       .then(response => {
//         this.setState({data: response.data });
//       })
//       .catch(err => {
//         console.log('SNAFU', err);
//       });
//   }

//   inputChangeHandler = (event) => {
//     const name = event.target.name;
//     this.setState({[name]: event.target.value})
//   }

//   addNewFriend = (event) => {
//     event.preventDefault()
//     console.log('Beginning of Add New Friend',this.state);
//      axios.post('http://localhost:5000/friends', {
//         name: this.state.name,
//         age: this.state.age,
//         email: this.state.email,
//       })
//       .then( response => {
//         this.setState({ data: response.data});
//         console.log(response);
//       })
//       .catch( err => console.log(err));
//       this.setState({
//         name: '',
//         age: 0,
//         email: '',
//       })
//   }

//   deleteFriend = (id) => {
//     return () => {
//       axios.delete(`http://localhost:5000/friends/${id}`)
//       .then( response => {
//         this.setState({ data: response.data});
//       })
//       .catch(err => console.log(err));
//     }
//   }
  
//   updateFriendHandler = (id, name, email, age) => {
//     console.log(id, name, email, age);
//     return() => {
//       axios.put(`http://localhost:5000/friends/${id}`)
//       .then( response => {
//         this.setState({ data: response.data});
//       })
//       .catch(err => console.log(err));
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.addNewFriend}>
//           <h1>Enter your new Friend's info below:</h1>
//           <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.inputChangeHandler}></input>
//           <input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.inputChangeHandler}></input>
//           <input type='number' placeholder='age' name='age' value={this.state.age} onChange={this.inputChangeHandler}></input>
//           <button type='submit'>Submit</button>
//         </form>
//         {this.state.data.map(friend => (
//           <Friends key={friend.id} friend={friend} deleteFriend={this.deleteFriend} name={friend.name} email={friend.email} age={friend.age} updateFriendHandler={this.updateFriendHandler} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
