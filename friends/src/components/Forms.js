import React, {Component} from 'react';
import axios from 'axios';

export default class Forms extends Component {
  constructor(props) {
    super(props);

  }

  inputChangeHandler = (e) => {
    this.props.submitNewFriend(this.setState({
      [e.target.name]: e.target.value
    }))
  }

  render() {

    return (<div>

      <form onSubmit={this.submitNewFriend}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={this.inputChangeHandler} value={this.props.name}/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={this.inputChangeHandler} value={this.props.age}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={this.inputChangeHandler} value={this.props.email}/>
        <input type="submit" value="Submit"/>
      </form>

    </div>);
  }
}
