import React from 'react';


class FriendForm extends React.Component {
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

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend);
    this.setState({ 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    })
  }

  putFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend, this.props.id);
    this.setState({ 
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <input 
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />

          {this.props.create ? <button onClick={this.postFriend}>Create</button> : <button onClick={this.putFriend}>Update</button>}
           
        </form>
      </div>
    )
  }
}

export default FriendForm;