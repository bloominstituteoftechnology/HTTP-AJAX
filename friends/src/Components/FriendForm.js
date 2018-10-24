import React from "react";

//friend form collects new friend information
export default class FriendForm extends React.Component {
  render(){
    console.log(this.props.value)
    return(
      <div className="form">
        <h2>Join the DarkSide</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name:</label>
          <input type="text"
            name="name"
            value={this.props.value.name} 
            placeholder="Enter your name..." 
            onChange={this.props.input}
          />
          <br/>
          <label>Age:</label>
          <input type="number" 
            name="age"
            value={this.props.value.age}
            placeholder="Age" 
            min="18" max="80" 
            onChange={this.props.input}/>
          <br/>
          <label>Email:</label>
          <input type="email" 
            value={this.props.value.email}
            name="email"
            placeholder="Email" 
            onChange={this.props.input}/>
          <input type="submit" onClick={(e) =>
          this.props.add(e)}/>
        </form>
      </div>
    )
  }
}