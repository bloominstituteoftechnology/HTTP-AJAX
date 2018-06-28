import React, { Component } from 'react';



class Form  extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
    };
  }


render(){
  return (

      <div>
<input className="input-field" type="text" placeholder="name" value={this.props.newfriend} onChange={this.props.nameChangeHandler} /> <br />

                 <input className="input-field" type="number" placeholder="age" value={this.props.age} onChange={this.props.ageChangeHandler} /><br />

<input className="input-field" type="text" placeholder="email" value={this.props.email} onChange={this.props.emailChangeHandler} /><br />

	   <button className="btn-style" onClick={this.props.addFriend}>Add Friend</button>

	  </div>
  );
}
}

export default Form;	
