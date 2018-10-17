import React from 'react';


const Friend = props =>{
    return(
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
            <p>{props.data.eamil}</p>
            <p>{props.data.id}</p>
        </div>
    )
}

export default Friend