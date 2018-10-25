import React from 'react';

export default class Add extends React.Component {

  constructor(props) {
    super(props)
    
    this.state ={
      name: '',
      age: '',
      email: '',
      id: ''
    } 
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.submit(this.state)
          this.setState({
            name: '',
            age: '',
            email: ''
          })
        }}>
          <input value={this.state.name} onChange={e => this.setState({name: e.target.value, id: this.props.friends.length + 1 })} placeholder='Please add name' />
          <input value={this.state.age} onChange={e => this.setState({age: Number(e.target.value)})} placeholder='Please add age' />
          <input value={this.state.email} onChange={e => this.setState({email: e.target.value})} placeholder='Please add email' />
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}