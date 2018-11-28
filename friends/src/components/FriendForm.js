import React from 'react';

export default class FriendForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: '',
      email: '',

    }

  }

  handleChange = e => {

    if (e.target.name === 'name') {

      this.setState({name: e.target.value});

    }

    if (e.target.name === 'age') {

      this.setState({age: e.target.value});

    }

    if (e.target.name === 'email') {

      this.setState({email: e.target.value});

    }

  }

  render() {

    return (

      <div className='friend-form'>

        <form onSubmit={e => {

          e.preventDefault();

          this.props.addFunc({
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
          });

        }}>

          <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name} />
          <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age} />
          <input type='email' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />

          <button>Add Friend</button>

        </form>

      </div>

    );

  }

}
