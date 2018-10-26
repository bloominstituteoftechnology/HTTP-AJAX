import React, {Component} from 'react';
import axios from 'axios';

export default class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <form onSubmit={(event) => this.props.submitNewFriend(event)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={this.props.inputChangeHandler} value={this.props.name}/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={this.props.inputChangeHandler} value={this.props.age}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={this.props.inputChangeHandler} value={this.props.email}/>
        <input type="submit" value="Submit"/>
      </form>
    </div>);
  }
}
