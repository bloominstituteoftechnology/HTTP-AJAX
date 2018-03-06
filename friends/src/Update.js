import React from 'react';

class Update extends React.Component {
  state = {
    name: this.props.friend.name,
    age: this.props.friend.age,
    email: this.props.friend.email,
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
  
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
  
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
  
        <button type="submit">Update Friend</button>
      </form>
    )
  }

  handleInputChange = (event) => {
    let { name, value } = event.target; 
    if (event.target.type === 'number') value = Number(value);
    this.setState( { [name]: value } ); 
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.update(this.state);
  };
}





export default Update;