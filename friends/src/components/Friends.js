import React from 'react'

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const obj = { ...this.state, id:this.props.friend.id };
    
    console.log(obj)
    this.props.editFriend(obj)
    
  };

  render(){

  return (
    <div>
    <h2 onClick={()=>this.props.deleteFriend(this.props.friend)}> {this.props.friend.name}</h2>
      <form onSubmit={this.formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"name"}
        />

        <label htmlFor="age">Age</label>
        <input
          required
          value={this.state.age}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"age"}
        />

        <label htmlFor="email">email</label>
        <input
          required
          value={this.state.email}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"email"}
        />

        <button>ADD NEW FRIEND!!!!</button>
      </form>
      </div>
    )
  }
  
}
