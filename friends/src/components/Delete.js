import React from 'react'
import axios from 'axios'


const Delete = (props) => {
    let removeFriend= props => {
        axios
        .delete(`http://localhost:5000/friends/${props.friend.id}`)
        .then((resolve) =>{
        console.log(resolve)
        })
        .catch(err => {
            console.log(err)
        })
    };

    return(
        <div>
        <button onClick{...props.delete}>
            X
        </button>
        </div>
    )
}

    
export default Delete 