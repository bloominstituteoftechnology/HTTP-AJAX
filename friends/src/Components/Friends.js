import React from 'react'

const Friends = props => {
    return (
    <div>
        <button
            onClick={ () => 
                props.updateForm(
                    props.friends.id,
                    props.friends.name,
                    props.friends.age,
                    props.friends.email
                )
            }
        >Update</button>
        <button
            onClick={ () => 
                props.delete(props.friends.id)
            }
        >Close</button>
        <div>{props.friends.name}</div>
        <div>{props.friends.age}</div>
        <div>{props.friends.email}</div>
    </div>
    )
}

export default Friends