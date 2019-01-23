import React from 'react';
import { AddForm, Btn } from '../styles/friendStyles';

class AddFriend extends React.Component {
  state = {
    info: {
      name: "",
      age: "",
      email: ""
    }
  }

  saveInput = (event) => {
    const info = {
      ...this.state.info,
      [event.target.name]: event.target.value
    }
    this.setState({info: info});
  }

  addFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state.info);
    this.setState({info: {name: "", age: "", email: ""}});
    this.props.history.push("/");
  }

  render() {
    return ( 
      <AddForm onSubmit={this.addFriend}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={this.state.info.name} onChange={this.saveInput}/>
        <label htmlFor="age">age:</label>
        <input type="text" name="age" value={this.state.info.age} onChange={this.saveInput}/>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" value={this.state.info.email} onChange={this.saveInput}/>
        <Btn type="submit">Add</Btn>
      </AddForm>
    );
  }
}
 
export default AddFriend;