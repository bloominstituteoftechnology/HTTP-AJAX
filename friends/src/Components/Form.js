import React from 'react'

const Form = props => {
    return (
    <form 
        onSubmit={props.submit}
    >
        {/* <div>Update</div> */}
        {/* <div
            close={props.close}
        >Close</div> */}
        <input
            type="text"
            name={props.nameX}
            placeholder="enter name"
            value={props.name}
            onChange={props.inputChange}
            required
        />
        <input
            type="number"
            name={props.ageX}
            placeholder="enter age"
            value={props.age}
            onChange={props.inputChange}
            required
        />
        <input 
            type="email"
            name={props.emailX}
            placeholder="enter email"
            value={props.email}
            onChange={props.inputChange}
            required        
        />
        <input 
            onClick={props.submit}
            type="submit"
        />
    </form>
    )
}

export default Form