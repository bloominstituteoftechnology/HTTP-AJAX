import React from 'react'

export default class Form extends React.Component {

  
  constructor(props) {
    super(props)
    
    this.state ={
      name: '',
      age: '',
      email: '',
    } 
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler =(e) => {
    e.preventDefault()
    this.props.edit(this.props.id, this.state)
    this.props.setFalse()
  }

  render() {
  return (
      <div>
            <form onSubmit={this.submitHandler}>
            <input value={this.state.name} onChange={this.changeHandler} name='name' placeholder='Please add name' />
            <input value={this.state.age} onChange={this.changeHandler} name='age' placeholder='Please add age' />
            <input value={this.state.email} onChange={this.changeHandler} name='email' placeholder='Please add email' />
            <button type='submit' >Submit</button>
          </form>
      </div>
    )
  }
}
