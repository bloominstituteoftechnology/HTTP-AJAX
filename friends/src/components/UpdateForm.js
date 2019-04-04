import React from 'react'

const UpdateForm = props => {


    return (
        <div className="form">
            <form onSubmit={props.updateFriend}>
            <input placeholder="name..." name="name" onChange={props.handleChanges}></input>
            <input placeholder="age..." name="age" onChange={props.handleChanges}></input>
            <input placeholder="email..." name="email" onChange={props.handleChanges}></input>
            </form>
            <button onClick={props.updateFriend} >Update Friend</button>
            <button onClick={props.deleteFriend} >Delete Friend</button>
        </div>
    )

}

export default UpdateForm