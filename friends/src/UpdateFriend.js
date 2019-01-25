import React, { Component } from 'react';

class UpdateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }
  changeHandler = event => {
    event.preventDefault();

    this.setState({friend: { ...this.state.friend, 
      [event.target.name]: event.target.value}})
  }
  render(){
      return ( 
        <div>
        <form onSubmit={this.updateFriend}>
          <fieldset>
            <legend>Update Friend Information</legend>
            <label htmlFor="name">Name:</label>
            <input type="name" name="name" id="name" value={this.state.friend.name} onChange={this.changeHandler}/>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" value={this.state.friend.age} onChange={this.changeHandler}/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={this.state.friend.email} onChange={this.changeHandler}/>
            <input type="submit" value="Update Friend"/>
            <input type="reset" value="Cancel" onClick={ () => this.props.hideForm()}/>
          </fieldset>
        </form>
      </div>
    );
  }
}
 
export default UpdateFriend;