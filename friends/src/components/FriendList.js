import React from 'react';

export default class FriendsList extends React.Component {
  state= {
    name: '',
    age: '',
    email: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.name, this.state.age, this.state.email)
    if (this.state.name && this.state.age && this.state.email) {
      this.props.addFriend(this.state.name, this.state.age, this.state.email)
    }
  }

  render() {
  if (this.props.loading) {
    return <h2>Loading data..</h2>;
  } else if (!this.props.loading && this.props.friends.length === 0) {
    return <h2>No data here, try again</h2>
  }

  return (
    <div>
      {this.props.friends.map((friend, i) => (
        <div key={i}>
          <p>{friend.name}</p>
        </div>
      ))}
      <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleOnChange} name='name' type='text' value={this.state.name} placeholder='Friends Name' />
            <input onChange={this.handleOnChange} type='number' name='age' value={this.state.age} placeholder='Friends Age' />
            <input onChange={this.handleOnChange} type='text' name='email' value={this.state.email} placeholder='Friends email' />
            <input type='submit' value='Submit' />
          </form>
    </div>
  )
  }
}