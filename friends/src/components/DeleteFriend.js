import React from 'react';

class DeleteFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return(
      <form>
        <h1>Remove Friend</h1>

        <input type='text'
               name='name'
               placeholder='Name'
               onChange={this.handleChange}
               value={this.state.friend.name}
               />

        <input type='text'
               name='age'
               placeholder='Age'
               onChange={this.handleChange}
               value={this.state.friend.age}
               />

        <input type='text'
               name='email'
               placeholder='Email'
               onChange={this.handleChange}
               value={this.state.friend.email}
               />

         <button>
           Delete
         </button>
      </form>
    );
  }
}

export default DeleteFriend;
