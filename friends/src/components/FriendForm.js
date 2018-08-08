import React from 'react'

const FriendForm = props => {
  return(

    <form className = "friendform" onSubmit = {props.onSubmit}>
        <input onChange = {props.onChange} name = "name" placeholder = "Add name" />
        <input onChange = {props.onChange} name =  "age" placeholder = "Add age" />
        <input onChange = {props.onChange} name = "email" placeholder = "Add email" />
         <button >Submit!</button>
    </form>
  )
}

export default FriendForm
