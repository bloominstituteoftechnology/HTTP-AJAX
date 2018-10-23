import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        Name: {this.props.name} <br /> Age: {this.props.age} <br /> email:{' '}
        {this.props.email}
      </p>
    );
  }
}

export default Friend;
