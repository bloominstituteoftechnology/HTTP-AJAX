import React from 'react';

const BurnItDown = props => {
  return (
      <div className='burn-it' onClick={props.deleteAll}>
        <i className="fas fa-skull-crossbones"/>
        Burn it down
      </div>
  )
}
export default BurnItDown;
