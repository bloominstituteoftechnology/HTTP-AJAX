import React, { Component } from 'react';
import axios from 'axios';
class Header extends Component{
  constructor(){
    super()

    }

setInput = (element)=>{
 this.setState({[element.target.name]: element.target.value})
}

postData = ()=>{
const newObj = {name: this.props.friends.name, age:this.props.friends.age, email: this.props.friends.email}
axios
.post('http://localhost:5000/friends',newObj)
.then(postedData =>{
    console.log("why?")
})
.catch(err =>{
    console.log("i guess it broke")
})
this.setState({name: "", age:"", email: ""})
}
render(){

console.log(this.props)
return(<React.Fragment>
 <div class="container-style">
    <div class="form-style">
    <input class="input-style" 
        type="text" 
        onChange={this.setInput}
        placeholder="Enter name"
        name="name"
        value={this.props.friends.name}
    />
    <input class="inputTwo-style" 
        type="number" 
        onChange={this.setInput}
        placeholder="Enter number"
        value={this.props.friends.number}
    />
    <input class="inputThree-style"
        type="text"
        onChange={this.setInput}
        placeholder="Enter email"
        value={this.props.friends.email}
        />
    <button OnClick={this.postData} class="button-style">Submit</button>
    </div>
    </div>


</React.Fragment>)

}
}

export default Header