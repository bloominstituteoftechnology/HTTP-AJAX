import React, {Component} from 'react';

class Form extends Component {
  state = {
    name: '',
    age: '',
    email:''
  }
}
//looked up forms
handlechange = (event) => {
this.setState({
  [event.target.name]: event.target.value
})
}

render() {
  return (
    <div className='App'>
    <form>
    <label>Name</label>
    <input type='text' value={this.state.inputvalue} onChange={this.handleChange}/>
    </form>
    </div>
  );
}
}

export default Form;
