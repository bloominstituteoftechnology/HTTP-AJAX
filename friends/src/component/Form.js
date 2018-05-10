import React, {Component} from 'react';

class Form extends Component {
  state = {
    name: '',
    age: '',
    email:''
  }

//looked up forms
handlechange = (event) => {
this.setState({
  [event.target.name]: event.target.value
})
}

handleSubmit (event) {
this.props.handleSubmit(this.state)
}

render() {
  const {
    name,
    age,
    email
  } = this.state
  return (
     <form onSubmit={this.handleSubmit.bind(this)}>
     <label>Name: </label>
    <input type='text' name='name' value={name} onChange={this.handleChange}/>
    <label>Age: </label>
    <input type='number' name='age' value={age} onChange={this.handleChange}/>
    <label>Email: </label>
    <input type='email' name='email' value={email} onChange={this.handleChange}/>
    <button onClick={this.handleSubmit}>Submit</button>
    </form>

  );
}
}
export default Form;
