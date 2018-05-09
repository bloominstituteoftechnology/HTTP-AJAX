import React, { Component } from 'react';

class FriendForm extends Component {
  state = {
    path: '',
    input: {
      name: '',
      age: '',
      email: '',
      color: '',
    }
  }
  componentDidMount = () => {    
    let path = this.props.match.path
    if (path === '/edit/:id'){
      this.setState({
        path: 'edit'
      })
      if (this.props.friends.length > 0) {
        let friends = this.props.friends
        let id = parseInt(this.props.match.params.id)
        let input = friends.filter(friend => friend.id === id)[0]
        this.setState({
          input
        })
      }
    } else {
      this.setState({
        path: 'new'
      })
    }
  }
  componentWillReceiveProps = (nextProps, prevProps) => {
    if (nextProps.friends !== prevProps.friends) {
      let friends = nextProps.friends
      let path = nextProps.match.path
      if (this.state.path === 'edit'){
        let id = parseInt(nextProps.match.params.id)
        let input = friends.filter(friend => friend.id === id)[0]
        this.setState({
          input
        })
      }
    }
  }
  handleChange = (e) => {
    let input = this.state.input
    input[e.target.name] = e.target.value
    this.setState({
      input
    })
  }
  handleSubmit = () => {
    if (this.state.path === 'new') {
      this.props.handleAdd(this.state.input)
    } else {
      this.props.handleUpdate(this.props.match.params.id, this.state.input)
    }
  }
  render() {
    const {name, age, email, color} = this.state.input
    console.log(this.state.input)
    return (
      <div>
          <input type='text' name='name' value={name} onChange={e => this.handleChange(e) } />
          <input type='number' name='age' value={age} onChange={e => this.handleChange(e)} />
          <input type='email' name='email' value={email} onChange={e => this.handleChange(e)} />
          <input type='text' name='color' value={color} onChange={e => this.handleChange(e)} />
          <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
} 
  

export default FriendForm;
