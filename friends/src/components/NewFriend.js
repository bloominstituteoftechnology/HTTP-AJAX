import React from 'react';

class NewFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  changeInput = (e) => {
    if(e.target.id === 'age') {
      this.setState({ newFriend: { 
        ...this.state.newFriend,
        [e.target.id]: Number(e.target.value),
      }})
    } else {
      this.setState({ newFriend: { 
        ...this.state.newFriend,
        [e.target.id]: e.target.value,
      }})
    }
    
  }

  render() {
    return (
      <form className="container">
        <h2>New Friend</h2>
        <div className="input-field">
          <input 
            id="name" 
            type="text"
            value={this.state.name} 
            onChange={this.changeInput} 
          />
          <label htmlFor="name">Name:</label>
        </div>
        <div className="input-field">
          <input 
            id="age"
            type="number"  
            value={this.state.age}
            onChange={this.changeInput} 
          />
          <label htmlFor="age">Age:</label>
        </div>
        <div className="input-field">
          <input 
            id="email" 
            type="text"  
            value={this.state.email}
            onChange={this.changeInput} 
          />
          <label htmlFor="email">Email:</label>
        </div>
        <button onClick={(event)=> this.props.stateNewFriend(event, this.state.newFriend)}>Submit</button>
      </form>
    )
  }
}

export default NewFriend;