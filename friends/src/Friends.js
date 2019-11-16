import React from "react";
import axios from 'axios';


class FriendForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            
            name: "",
            age: "",
            email: "",
            nameHolder:"Name",
            ageHolder:"Age",
            emailHolder:"Email"

        }
    }
    handleSubmitFriend = () => {
        const friend ={ name: this.state.name, age: this.state.age, email: this.state.email };
        axios
        .post('http://localhost:5000/friends',  friend )
        .then(response => {
          console.log("POST Response",response);
          this.props.handlData(response.data);
        this.setState({ name: "", age: "", email:"" });
        })
        .catch(error => console.log(error));
      };
      handleNameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
  return (
    <div onSubmit={this.handleSubmitFriend}>
      <input
        type="text"
        placeholder="this.state.nameHolder"
        name="name"
        value={this.state.name}
        onChange={this.handleNameChange}
        
      />
      <input
        type="text"
        placeholder="this.state.ageHolder"
        name="age"
        value={this.state.age}
        onChange={this.handleNameChange}
        
      />
      <input
        type="text"
        placeholder="this.state.emailHolder"
        name="email"
        value={this.state.email}
        onChange={this.handleNameChange}
        
      />
      <button onClick={this.handleSubmitFriend}>Add Friend</button>
    </div>
    
  );

};
}
    
export default FriendForm;

