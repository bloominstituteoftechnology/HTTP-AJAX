import React, {Component} from 'react';
import "./AddFriend.css";
import axios from 'axios';
class AddFriend extends Component{
  constructor(props){
    super(props);
    this.state ={
      name:'',
      age:'',
      email:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.emailChange = this.emailChange.bind(this);

  }

  handleSubmit(event){
    let ageInt = parseInt(this.state.age,10);
    axios.post('http://localhost:5000/friends',{name:this.state.name,age:ageInt,email:this.state.email}).then( (response) =>{
      console.log(response);
    });
  }

  nameChange(event){
    this.setState({name:event.target.value});
  }
  ageChange(event){
    this.setState({age:event.target.value});
  }
  emailChange(event){
    this.setState({email:event.target.value});
  }
  render(){
    return (
    <div>
      <div>Add a friend</div>
      <form onSubmit={this.handleSubmit}>
      <div>
      <label>Name: 
        <input onChange={this.nameChange} type="text" value={this.state.name} name="name" />
      </label>
      </div>
        <div>
        <label>Age: 
        <input onChange={this.ageChange} type="text" value={this.state.age} name="age" /></label>
        </div>
        <div>
        <label>Email: 
        <input onChange={this.emailChange} type="text" value={this.state.email} name="email" />
        </label>
        <div>
        <input type="submit"/>
        </div>
        </div>
      </form>
    </div>)

  }
}



export default AddFriend;
