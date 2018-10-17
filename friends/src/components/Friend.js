import React from 'react';

class Friend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      email: props.email,
    }
  }
  render() {
    return(
      <div className='friend'>
        <p>hi i'm your friend {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <p>email: {this.state.email}</p>
      </div>
    )
  }
}

export default Friend;
