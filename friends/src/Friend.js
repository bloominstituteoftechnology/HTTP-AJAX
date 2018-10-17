import React from 'react'

const Friend = (props) => {
    return (
        <div>
            <span>Name: {props.name}</span>

            <span>Age: {props.age}</span>

            <span>Email:{props.email}</span>
        </div>
    )
}

export default Friend
