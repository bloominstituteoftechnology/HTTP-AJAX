import React from 'react';

class NewFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        email: '',
    }
  }

  render() {
    return (
        <form>
            <input value={props.name} />
            <input value={props.age} />
            <input value={props.email} />
        </form>
    )
  }
}

export default NewFriend;