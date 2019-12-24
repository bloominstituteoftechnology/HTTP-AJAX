import React from 'react';

const Undo = props => {
  return (
      <div className='undo-button' onClick={props.restoreList}>
        <i className="fas fa-undo-alt"/>
        Undo
      </div>
  )
}
export default Undo;
