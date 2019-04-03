import React from 'react'

const Form = props => {


    return (
        <div className="form">
            <form onSubmit={props.createFriend}>
            <input placeholder="name..." name="name" onChange={props.handleChanges}></input>
            <input placeholder="age..." name="age" onChange={props.handleChanges}></input>
            <input placeholder="email..." name="email" onChange={props.handleChanges}></input>
            </form>
            <button onClick={props.createFriend} >Add New Friend</button>
        </div>
    )

}

export default Form