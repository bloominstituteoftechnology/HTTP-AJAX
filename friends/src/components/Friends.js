import React from "react";
import axios from "axios";

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleAgeChange = e => {
    this.setState({ newFriend: { ...this.state.newFriend, age: e.target.value } });
  };


  handleEmailChange = e => {
    this.setState({ newFriend: { ...this.state.newFriend, email: e.target.value } });
  };

  handleNameChange = e => {
    this.setState({ newFriend: { ...this.state.newFriend,  name: e.target.value } });
  };



  handleSubmit = e => {
    e.preventDefault();
    const friend=this.state.newFriend;
    const addFriend = {
      newFriend: this.state.newFriend
    };
    if (friend.age&&friend.name&&friend.email){
      axios
        .post("http://localhost:5000/friends", addFriend.newFriend)
        .then(result => console.log(result.data));
      this.setState({newFriend: {age: "", name: "", email: ""}})
    }else{ alert("bro, fill out the entire form")};
  };
  
  handleDelete = (id,e) => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(res=>this.setState({friends: res.data}));
    //this.setState({friend: })
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(x => this.setState({ friends: x.data }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/friends")
      .then(x => this.setState({ friends: x.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <div>{friend.name + ", " + friend.age}<br/>{friend.email}<br/><button type="button" onClick={(e)=>this.handleDelete(friend.id,e)}>Delete</button><button type="button">Change</button></div>
        ))}
        <div><br />
        <form onSubmit={this.handleSubmit}>
          <label>
            New friend's name:<br />
            <input value={this.state.newFriend.name} type="text" name="name" onChange={this.handleNameChange} />
          </label><br /> 
          <label>
            Age:<br />
            <input value={this.state.newFriend.age} type="text" name="age" onChange={this.handleAgeChange} />
          </label><br />
          <label>
            Email:<br />
            <input value={this.state.newFriend.email} type="text" name="email" onChange={this.handleEmailChange} />
          </label><br />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}
