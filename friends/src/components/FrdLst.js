import React from 'react';
import FrdItm from './FrdItm';

const FrdLst = ({ list }) => {
  return (
    <div className="frdlst">
        {list.map((item) => (
            <FrdItm key={item.id} name={item.name} age={item.age} email={item.email} />
        ))}
    </div>
  )
}

export default FrdLst;
