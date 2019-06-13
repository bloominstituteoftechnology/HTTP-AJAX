import React, { Component } from "react";
import './friends.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  onChangeHandler = event => {
    if(event.target.type === "number"){
      this.setState({
        [event.target.name]: Number(event.target.value)
      });
    }else{
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  id = () => {
    console.log(this.props);
    this.props.friends.forEach(item => {
      if (
        item.name === this.state.name ||
        item.age === this.state.age ||
        item.email === this.state.email
      ) {
        console.log(item.id);
        this.props.modifyFriend(item.id, this.state);
      }
    });
  };

  render() {
    return (
      <div>
        <form
          className=""
          onSubmit={event => {
            event.preventDefault();
            this.props.addFriend(this.state);
            this.setState({
              name: "",
              age: "",
              email: ""
            });
          }}
        >
          <input
            onChange={this.onChangeHandler}
            value={this.state.name}
            name="name"
            placeholder="Enter your friends name"
            type="text"
          />
          <input
            onChange={this.onChangeHandler}
            value={this.state.age}
            name="age"
            placeholder="Enter your friends age"
            type="number"
          />
          <input
            onChange={this.onChangeHandler}
            value={this.state.email}
            name="email"
            placeholder="Enter your friends email"
            type="text"
          />
          <button type="submit">Submit</button>
          <button
            onClick={event => {
              event.preventDefault();
              this.id();
              this.setState({
                name: "",
                age: "",
                email: ""
              });
            }}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
