import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name:'',
      age: '',
      email: '',
    }
  }
    
  onChangeHandler = event =>{
      this.setState({
        [event.target.name]: event.target.value
      });
    };

  handleSubmit = event => { 
    event.preventDefault(); 
      console.log (this.state);
      if (this.props.edit) {
        this.props.editItem(
          this.state,
          this.props.match.params.itemId
        );
      } else {
        this.props.addFriend(this.state);
      }
      this.props.history.push("/shop");
};

  render() {
    return (
      <div>
      <h1>{this.props.edit ? "Edit Item" : "Add New Item"}</h1>
      <form onSubmit={event => {this.handleSubmit();}}>
        <input type="text" placeholder="Enter a Name" name="name" value={this.state.name} onChange={this.onChangeHandler} />
        <input type="text" placeholder="Enter an age" name="age" value={this.state.age} onChange={this.onChangeHandler} />

        <input type="email" placeholder="Enter an Email" name="email" value={this.state.email} onChange={this.onChangeHandler} />
        <button>{this.props.edit ? "Edit Friend" : "Add Friend"}</button>

      </form>

      </div>
    )
  }
}

Form.propTypes = {

}

export default Form;