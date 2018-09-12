import React, { Component } from 'react';
import './add.css';
import axios from 'axios';

class Add extends Component {
constructor(props){
super(props);
this.state={
name:'',
age:'',	
email:'',	
};
this.changename = this.changename.bind(this);
this.changeage = this.changeage.bind(this);
this.changeemail = this.changeemail.bind(this);
}

changename(e){
this.setState({name:e.target.value});
}

changeage(e){
this.setState({age:e.target.value});
}

changeemail(e){
this.setState({email:e.target.value});
}

submit(){
if(!this.state.name || !this.state.age || !this.state.email){alert('fill out all forms')}
else{
axios.post('http://localhost:5000/friends',{	
name:this.state.name,
age:this.state.age,
email:this.state.email,
});
this.setState({email:'',name:'',age:''});
}
}

render(){
return(
<div className="inputs">
<div>Name: <input type="text" placeholder="name" value={this.state.name} onChange={this.changename} /></div>
<div>Age: <input type="text" placeholder="age" value={this.state.age} onChange={this.changeage} /></div>
<div>E-mail: <input type="text" placeholder="email" value={this.state.email} onChange={this.changeemail} /></div>
<div className="submit" onClick={()=>this.submit()}>Add new friend!</div>
</div>
);}
}

export default Add;