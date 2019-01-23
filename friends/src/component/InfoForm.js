import React from 'react';
import { FormWrapper, Btn } from '../styles/friendStyles';

class InfoForm extends React.Component {
  state = {
    info: {
      name: "",
      age: undefined,
      email: ""
    },
    isValid: false
  }

  componentDidMount = () => {
    if(this.props.info) { // populate the form fields with previous data, if available.
      this.setState({info: this.props.info});
    }
  }

  saveInput = (event) => {
    const info = {
      ...this.state.info,
      [event.target.name]: event.target.value
    }
    const {name, age, email} = info;
    let isValid = false;
    if(name && age && email) isValid = true; 
    this.setState({info: info, isValid: isValid});
  }

  onSubmitAction = (event) => {
    event.preventDefault();
    this.props.action(this.state.info, this.props.match.params.id);
    this.setState({info: {name: "", age: undefined, email: ""}}); // reset the form fields
    this.props.history.push("/"); // remove the form from view
  }

  render() {
    return ( 
      <FormWrapper onSubmit={this.onSubmitAction}>
        <h2>{this.props.message}</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Name" value={this.state.info.name} onChange={this.saveInput}/>
        <label htmlFor="age">age:</label>
        <input type="number" name="age" placeholder="Age" value={this.state.info.age} onChange={this.saveInput}/>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" placeholder="Email" value={this.state.info.email} onChange={this.saveInput}/>
        <Btn type="submit" disabled={!this.state.isValid}>Submit</Btn>
      </FormWrapper>
    );
  }
}
 
export default InfoForm;