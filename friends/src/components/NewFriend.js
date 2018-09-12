import React from 'react';

class NewFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputAge: '',
      inputEmail: ''
    }
  }

  changeInput = (e) => {
    this.setState( { [e.target.id]: e.target.value} )
  }

  render() {
    return (
      <form className="container">
        <h2>New Friend</h2>
        <div className="input-field">
          <label htmlFor="inputName">Name:</label>
          <input 
            id="inputName" 
            placeholder="Friend name" 
            value={this.state.inputName} 
            onChange={this.changeInput} 
          />
        </div>
        <div className="input-field">
          <label htmlFor="inputAge">Age:</label>
          <input 
            id="inputAge" 
            placeholder="Friend age" 
            value={this.state.inputAge}
            type="number" 
            onChange={this.changeInput} />
        </div>
        <div className="input-field">
          <label htmlFor="inputEmail">Email:</label>
          <input 
            id="inputEmail" 
            placeholder="Friend email" 
            value={this.state.inputEmail}  
            onChange={this.changeInput} />
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewFriend;