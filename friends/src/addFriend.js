import React from 'react';

export default class Add extends React.Component {

  constructor(props) {
    super(props)
    
    this.state ={
      name: '',
      age: '',
      email: '',
      id: this.props.friends.length + 1
    } 
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value, id: this.props.friends.length + 1})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input value={this.state.name} name='name' onChange={this.changeHandler} placeholder='Please add name' />
          <input value={this.state.age} name='age' onChange={this.changeHandler} placeholder='Please add age' />
          <input value={this.state.email} name='email' onChange={this.changeHandler} placeholder='Please add email' />
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}
