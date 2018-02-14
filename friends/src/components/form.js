import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div style={{border: '3px solid black', padding: '20px', height: '75px', margin: '-3px 0 0 0'}}>
        <form action="" onSubmit={this.props.onSubmit}>
          <input type="name" 
            name="name" 
            value={this.props.name} 
            placeholder="Name" 
            onChange={this.props.handleChange}
            /> <br/>
          <input 
            type="number" 
            name="age" 
            value={this.props.age} 
            placeholder="Age"
            onChange={this.props.handleChange}
            /> <br/>
          <input 
            type="email" 
            name="email" 
            value={this.props.email} 
            placeholder="Email"
            onChange={this.props.handleChange}
            /> <br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    ) // return
  } // render()
} // Form component

export default Form;