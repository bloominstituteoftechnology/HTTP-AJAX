import React from 'react';


class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input 
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input type="submit" placeholder="Create" />
        </form>
      </div>
    )
  }
}

export default NewFriendForm;