import React from "react";





const Friend =  props => {
    return (
        <div>
            name: {props.friend.name}
            age:{props.friend.age}
            email:{props.friend.email}
        </div>
    )
}



export default Friend;