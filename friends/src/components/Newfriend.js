import React,{ Component} from 'react';
import axios from "axios";

const NewFriend = (props)=>{
    return(
        <form onSubmit ={props.submitnewfriend}>
            <p>Add your new Friend</p>
    <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input  class="form-control" name ='name' value={props.name}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter name" onChange={props.inputChangeHandler}/>
    
     </div>
     <div class="form-group">
    <label for="exampleInputEmail1">Age</label>
    <input  class="form-control" name ='age' value={props.age}
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter age" onChange={props.inputChangeHandler} />
    
     </div>
     <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  class="form-control" name ='email' value={props.email}
     id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Enter email" onChange={props.inputChangeHandler} />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}

export default NewFriend

/*refHandlerEmail={this.inputName} 
refHandlerEmail={this.inputAge}
refHandlerEmail={this.inputEmail}*/