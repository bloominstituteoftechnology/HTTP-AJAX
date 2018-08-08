import React from 'react'

const FriendForm = props => {
  return(
    <form className = "friendform" onSubmit = {props.Submit}>
        <input onChange = {props.Change} name = "name" placeholder = "Add name" />
        <input onChange = {props.Change} name =  "age" placeholder = "Add age" />
        <input onChange = {props.Change} name = "email" placeholder = "Add email" />
         <button value="onSubmit">Submit!</button>
    </form>
  )
}

export default FriendForm
