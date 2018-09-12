import React from 'react'

const FrdItm = (props) => {
  return (
    <div className="frditm">
    <h3>{props.name}</h3>
    <h5>{props.age}</h5>
    <h5>{props.email}</h5>
    </div>
  )
}

export default FrdItm;