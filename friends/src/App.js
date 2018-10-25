import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    lists:[],
    name: " ",
    age:" ",
    email:" "
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then(response => {
      const lists = response.data;
      this.setState({lists});
    })
    .catch(err=> {
      console.log(err);
    });
  }

handleChange = event => {
  this.setState({ name: event.target.value});
}

handleSubmit = event => {
  event.preventDefault();

  const friend = {
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  };

  axios.post(`http://localhost:5000/friends`, {friend})
  .then(response => {
    console.log(response);
    console.log(response.data);
  })
  .catch(err=> {
    console.log(err);
  });
}

// deleteHandler = (id) => {
//   return () => {
//     axios.delete(`/${id}`)
//     .then(response => {
//       this.setState({friends: response.data})
//       console.log(response)
//     })
//     .catch(err=> {
//       console.log(err);
//     });
//   }
// }

// updateListHandler = (id, name, email) {
//     console.log(id, name, email)
// }
  render() {
    return (
      <div>
        <h1>Friends List</h1>
        <ul>{this.state.lists.map(list => {
          return (
            <li key={list.id}>
            <div>Name:{list.name}</div>
            <div>Age:{list.age}</div>
            <div>Email:{list.email}</div>
            </li>
          )
        })}</ul>
<form onSubmit={this.handleSubmit}>
<h3>Add a new person</h3>
  <label>
    Name:
    <input type="text" name="name" onChange={this.handleChange}/>
    </label>
    <label>
      Age:
    <input type="text" name="age" onChange={this.handleChange}/>
    </label>
    <label>
      Email:
    <input type="text" name="email" onChange={this.handleChange}/>
  </label>
  <button type="submit">ADD</button>
</form>
      </div>

    );
  }
}

export default App;
