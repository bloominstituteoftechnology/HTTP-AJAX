import React, { Component } from "react";
import './FriendsForm.css'
class FriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bondor",
      age: "22",
      email: "bondor@lambda.edu"
      
    };
  }

  componentDidUpdate(prevProps, prevState){

   if (prevProps.currentFriend.name !== this.props.currentFriend.name)
   {
    this.setState({
      name: this.props.currentFriend.name,
      age: this.props.currentFriend.age,
      email: this.props.currentFriend.email,
    
    });}

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    if (this.props.currentFriend.name == undefined){
    this.props.addNewFriend(this.state);
    //this.props.history.push()
    this.setState({

      name: '',
      age: '',
      email: ''
      

    });} else {

      this.props.updateFriend(this.props.currentFriend.id, {...this.state, id:this.props.currentFriend.id});
    }
  }


  render() {
    return (
      <div className="FriendsForm">

        <form
        onSubmit={this.submitHandler}>

          <input
            type="text"
            onChange={this.handleChange}
            name={"name"}
            value={this.state.name}
            
          />
          <input
            type="integer"
            onChange={this.handleChange}
            name={"age"}
            value={this.state.age}
           

          />
          <input
            type="text"
            onChange={this.handleChange}
            name={"email"}
            value={this.state.email}
            

          />
          <button>Click Me!</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
