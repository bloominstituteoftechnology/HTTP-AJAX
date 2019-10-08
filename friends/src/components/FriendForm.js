import React from 'react';

import './FriendForm.scss';

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

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.currentFriend.name != this.props.currentFriend.name) {

      this.setState({

        name: this.props.currentFriend.name,
        age: this.props.currentFriend.age,
        email: this.props.currentFriend.email,

      })

    }

  }

  render() {

    return (

      <div className='friend-form'>

        <form onSubmit={e => {

          e.preventDefault();

          let obj = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
          };

          if (!this.props.currentFriend.name) {

            this.props.addFunc(obj);

            this.setState({

              name: '',
              age: '',
              email: ''

            });

          }

          else {

            console.log("UPDATE");

            obj.id = this.props.currentFriend.id;
            this.props.updateFunc(this.props.currentFriend.id, obj);

            this.setState({

              name: '',
              age: '',
              email: ''

            });

          }

        }}>

          <input type='text' name='name' placeholder='name' onChange={this.handleChange} value={this.state.name} />
          <input type='text' name='age' placeholder='age' onChange={this.handleChange} value={this.state.age} />
          <input type='email' name='email' placeholder='email' onChange={this.handleChange} value={this.state.email} />

          <button>{this.props.currentFriend.name ? 'Update Friend' : 'Add Friend'}</button>

        </form>

      </div>

    );

  }

}
