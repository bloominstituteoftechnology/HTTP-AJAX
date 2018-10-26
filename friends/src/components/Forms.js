import React, {Component} from 'react';
import axios from 'axios';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
    name: '',
  }




    let bodyFormData = new FormData();
    // bodyFormData.set(event.target.name: event.target.value);

}

handleChange = event => {
  this.setState({ name: event.target.value });
}

handleSubmit = event => {
    event.preventDefault();
    const user = {
          name: this.state.name
        };



    axios.post(`http://localhost:5000/friends`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


render() {

  return (<div>

    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>
      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age"/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"/>

      <input type="submit" value="Submit"/>

    </form>
  </div>);
}
}
