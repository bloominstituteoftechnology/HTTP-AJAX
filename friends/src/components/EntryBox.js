import React, { Component } from 'react';

class EntryBox extends Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" id="name"/>
        </label>
        <label>
          Age:
          <input type="text" name="age" id="age"/>
        </label>
        <label>
          Email:
          <input type="text" name="email" id="email"/>
        </label>
        <input type="submit" value="Submit" onClick={this.props.SubmitForm} />
      </form>
    )
  }
}

export default EntryBox;

// this.props refers to the arguments we pass in from App.js
// If this was a function instead of a class we would have to specify the argument props in the function ()
