import React from 'react'

const Form = props => {
    return (
    <form 
        onSubmit={props.submit}
    >
        <input
            type="text"
            name="name"
            placeholder="enter name"
            value={props.name}
            onChange={props.inputChange}
            required
        />
        <input
            type="number"
            name="age"
            placeholder="enter age"
            value={props.age}
            onChange={props.inputChange}
            required
        />
        <input 
            type="email"
            name="email"
            placeholder="enter email"
            value={props.email}
            onChange={props.inputChange}
            required        
        />
        <input type="submit"/>
    </form>
    )
    
}

export default Form