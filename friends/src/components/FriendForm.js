import React from 'react'
import {
    Card,   CardBody, Form,
  }from 'reactstrap';
const FriendForm = props => {
  return(

    <Form className = "friendform" onSubmit = {props.onSubmit}>
        <input onChange = {props.onChange} name = "name" placeholder = "Add name" />
        <input onChange = {props.onChange} name =  "age" placeholder = "Add age" />
        <input onChange = {props.onChange} name = "email" placeholder = "Add email" />
         <button >Submit!</button>
    </Form>
  )
}

export default FriendForm
