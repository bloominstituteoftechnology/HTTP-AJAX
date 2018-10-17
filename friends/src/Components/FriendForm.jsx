import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleChange = (event) => {
    const inputType = String(event.target.parentNode.childNodes[0].nodeValue).slice(0, -1).toLowerCase();
    let tempObj = {};
    tempObj[inputType] = event.target.value;
    this.setState( tempObj );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewFriend(this.state);
  }

  render() { 
    return (  
      <div className="FriendForm">
        <form onSubmit={this.handleSubmit}>

          <label>
            Name:
            <input type='text' placeholder='name' onChange={this.handleChange}/> 
          </label> 

          <label>
            Email:
            <input type='text' placeholder='email' onChange={this.handleChange}/> 
          </label>

           <label>
            Age:
            <input type='text' placeholder='age' onChange={this.handleChange}/> 
          </label>

          <input type="submit" value="Submit" />

        </form> 
      </div>
    );
  }
}
 
export default FriendForm;