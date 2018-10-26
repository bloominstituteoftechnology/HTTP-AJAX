import React, { Component } from 'react'

import Form from './form'

export default class Friend extends Component {

  constructor(props) {
    super(props);

    this.state ={
      edit: false,
    }
  }

  clickHandler = () => {
    if(!this.state.edit) {
      this.setState({edit: true})
    } else {
      this.setState({edit: false})
    }
  }

  setFalse = () => {
    this.setState({edit: false})
  }

  IfForm = () => {
    if (this.state.edit) {
      return <Form id={this.props.friend.id} edit={this.props.edit} setFalse={this.setFalse} />
    }
    return null
  }

  render() {
    return (
      <div>
          <h1>This friend is named {this.props.friend.name}</h1>
          <h3>Their age is {this.props.friend.age}</h3>
          <h3>Their email is: {this.props.friend.email}</h3>
          <div> 
            <span style={{cursor: 'pointer'}} onClick={ () => this.props.deleteFriend(this.props.friend.id)}> Delete </span>
            <span style={{cursor: 'pointer'}} onClick={() => this.clickHandler()} >Edit</span>
          </div>
          <this.IfForm></this.IfForm>
      </div>
    )
  }
}
