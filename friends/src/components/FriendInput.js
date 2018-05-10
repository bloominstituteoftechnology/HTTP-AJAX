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
      id: 0, 
    }
  }  

  // handleName = event => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }

  // handleAge = event => {
  //   this.setState({
  //     age: event.target.value,
  //   });
  // }

  // handleEmail = event => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // }

  handleChange = (el) => {
    this.setState({
      [el.target.name]: el.target.value
    })
  }

  handleSubmit = event => {
    // event.preventDefault();
    axios
      .post(`http://localhost:5000/friends`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(response => {
        console.log('post data', response.data)
      })
      .catch(err => console.log(err))
  }
  
  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange}/>
        </label><br/>
        <label>
          Age:
          <input type="text" name="age" onChange={this.handleChange}/>
        </label><br/>
        <label>
          Email:
          <input type="text" name="email" onChange={this.handleChange}/>
        </label><br/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default FriendInput;