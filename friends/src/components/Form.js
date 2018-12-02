import React, { Component } from 'react'
// import axios from 'axios':
// import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state ={
      stateFriendsData: [],
      name:'',
      age: '',
      email: '',
    }
  }

  // ComponentDidMount(){
  //   let currentFriend = this.props.data.find( item=> item.id.tostring() === this. match.params.id);
  // };

  // this.setState({
  //   name: this.props.edit ? currentFriend.name :  "",
  // })

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevProps.currentFriend.name != this.props.currentFriend.name) {

  //     this.setState({
  //       name: this.props.currentFriend.name,
  //       age: this.props.currentFriend.age,
  //       email: this.props.currentFriend.email,
  //     })

  //   }

  // }
    
  onChangeHandler = event =>{
    event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      });
    };

  // submitHandler = event => { 
  //   event.preventDefault()
  //   this.props.onAddFriend(this.state);
  //   this.props.history.push("/Friends");
  // };

  render() {
    return (
      <div>
      <h1>Add New Friend</h1>
      <form onSubmit={event => {
        event.preventDefault ();
        this.props.addFriend(this.state); this.props.history.push('/Friend');}}>
        <input type="text" placeholder="Enter a Name" name="name" value={this.state.name} onChange={this.onChangeHandler} />
        <input type="text" placeholder="Enter an age" name="age" value={this.state.age} onChange={this.onChangeHandler} />

        <input type="email" placeholder="Enter an Email" name="email" value={this.state.email} onChange={this.onChangeHandler} />
          <button>Add New Friend</button>

      </form>

      </div>
    )
  }
}

// Form.propTypes = {

// }

export default Form;