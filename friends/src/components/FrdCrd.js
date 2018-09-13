import React from 'react';

const FrdCrd = (props) => {
    return (
        <div className="frditm">
        <h3>{props.item.name}</h3>
        <h5>{props.item.age}</h5>
        <h5>{props.item.email}</h5>
        </div>
      );
}

export default FrdCrd;
