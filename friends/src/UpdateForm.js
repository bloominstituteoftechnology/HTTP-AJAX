import React from 'react';

export default class UpdateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      friend: 1,
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  updateFriend = () => {
    this.props.updateFriend(this.state.friend, {name: this.state.name, age: this.state.age, email: this.state.email});
  }
  handleOptionValue = (e) => {
    this.setState({
      friend: e.target.value
    })
  }
  render() {

    return (
      <div style={styleContainer}>
        <form style={styleForm}>
          <h1>Update Form Modal</h1>
          <input style={{margin: '10px 0'}} onChange={this.onChangeHandler} name="name" type="text" placeholder="Name"/>
          <input style={{margin: '10px 0'}} onChange={this.onChangeHandler} name="age" type="text" placeholder="Age" />
          <input style={{margin: '10px 0'}} onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" />
          <select onChange={this.handleOptionValue}>
          {/* <option value="grapefruit">Grapefruit</option> */}
          {this.props.friends.map(friend => {
            return (
              <option defaultValue={1} name="friend" value={friend.id}>{friend.name}</option>
            )
          })}
          </select>
          <button style={{margin: '10px 0'}} type="submit" onClick={this.updateFriend}>Submit</button>
        </form>
      </div>
    )
  }
}

const styleContainer = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  top: '0',
  left: '0',
  background: 'purple',
  opacity: '0.9'
}

const styleForm = {
  height: '300px',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
}