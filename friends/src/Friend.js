import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.name}</p>;
  }
}

export default Friend;
