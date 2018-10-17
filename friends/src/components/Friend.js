import React from 'react';

class Friend extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className='friend'>
        <p>hi i'm your friend!</p>
      </div>
    )
  }
}

export default Friend;
