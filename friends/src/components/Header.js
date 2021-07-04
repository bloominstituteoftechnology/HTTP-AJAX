import React, { Component } from 'react';
const Header =(props)=>{

return(<React.Fragment>
 <div class="container-style">
    <div class="form-style">
    <input class="input-style" 
        type="text" 
        onChange={props.setInput}
        placeholder="Enter name"
        name="name"
        value={props.name}
    />
    <input class="inputTwo-style" 
        type="number" 
        onChange={props.setInput}
        name="age"
        placeholder="Enter number"
        value={props.age}
    />
    <input class="inputThree-style"
        type="text"
        onChange={props.setInput}
        name="email"
        placeholder="Enter email"
        value={props.email}
        />
    <button onClick={props.postData} class="button-style">Submit</button>
    </div>
    </div>


</React.Fragment>)


}

export default Header