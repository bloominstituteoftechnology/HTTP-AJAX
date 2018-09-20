import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
    }
  }
  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addFriend = () => {
    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email,
        id: Number(this.state.id)
      }
    )
    .catch(error => {
        console.error('Server Error', error);
      });
  }
  
  render() {

    return (
      <div>
        <form>
          <input onChange={this.onChangeHandler} name="name" type="text" placeholder="Name"/>
          <input onChange={this.onChangeHandler} name="age" type="text" placeholder="Age" />
          <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" />
          <input onChange={this.onChangeHandler} name="id" type="text" placeholder="id" />
          <button onClick={this.addFriend} >Add Friend</button>
        </form>
      </div>
    )
  }
}

export default Form


