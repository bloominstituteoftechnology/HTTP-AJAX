import React from 'react';

class NewFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        email: '',
    }
  }

  handleChange = (event) => {
      this.setState({
        name: event.target.value,
      }) 
  }

  handleChange2 = (event) => {
    this.setState({
      age: event.target.value,
    }) 
  }

  handleChange3 = (event) => {
    this.setState({
      email: event.target.value
    }) 
  }

  submitHandler = (event) => {
      this.setState({
        name: '',
        age: '',
        email: ''
      })
  }

  render() {
    return (
        <form>
            <h3>New Friend? Enter their info: </h3>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Email: {this.state.email}</p>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange2} />
            <input type="text" name="email" placeholder="Email" onChange={this.handleChange3} />
            <button onClick={this.submitHandler}>Submit</button>
        </form>
    )
  }
}

export default NewFriend;