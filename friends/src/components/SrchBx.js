import React from 'react';

const SrchBx = props => {
  return (
    <div>
      <input type="search" name={props.iptnme} placeholder="Search" value={props.textOnProps} onChange={props.srchChange} />
    </div>
  )
}

export default SrchBx;
