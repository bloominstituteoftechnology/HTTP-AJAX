import React, {
  Component
} from 'react';
import axios from 'axios';


class FriendInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }  

  handleName = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleAge = event => {
    this.setState({
      age: event.target.value,
    });
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:5000/friends`, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(response => {
        //console.log(response)
        console.log('post data', response.data)
      })
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleName}/>
        </label>
        <label>
          Age:
          <input type="text" name="age" onChange={this.handleAge}/>
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={this.handleEmail}/>
        </label>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default FriendInput;