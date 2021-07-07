import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friends: [],
          name: "",
          age: "",
          email: ""
        }
}
handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  saveData = () => {
    const poo = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
    .post(`http://localhost:5000/friends`, poo) //Poo is the perfect crux for my entire project hahahah
    .then(savedData => {
      console.log(savedData);
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({ name: '', age: '', email: '' });
  };
  render() {
      return (
        <div>
        <div className="columnCenter">  <form>
          <div className="columnA">
              <span className="titleNew"> New Friend </span>
                <input className="centerText" type="text" name="name" onChange={this.handleTextChange} placeholder="Name Here" />
                
              
                <input className="centerText" type="number" name="age" onChange={this.handleTextChange} placeholder="Age Here" />
                
                <input className="centerText" type="text" name="email" onChange={this.handleTextChange} placeholder="Email Here" />
              <button type="submit" value="Submit" onClick={this.saveData}>Submit Friend</button>
            </div>
            </form>
            </div>
      </div>
      )
  }
}

export default List;