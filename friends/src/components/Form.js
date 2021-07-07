import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';


const Form = (props) => {

    return (
        <div>
            <h1>{ props.formType === 'add' ? 'Create A Brand New Friend' : 'Mutate Your Bland Homie' }</h1>
        <form onSubmit={props.submitFriend}>
        <input type='text' name='name' placeholder="Name" onChange={props.handleInput} value={props.newFriend.name}/>
        <input type='text' name='age' placeholder="Age" onChange={props.handleInput} value={props.newFriend.age}/>
        <input type='text' name='email' placeholder="Email" onChange={props.handleInput} value={props.newFriend.email}/>
      </form>
      <div onClick={props.submitFriend}>Submit</div>
      </div>
    )
}

export default Form;