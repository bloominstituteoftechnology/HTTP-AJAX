import React, {
  Component
} from 'react';
import axios from 'axios';


class FriendInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      id: 0, 
    }
  }  
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = event => {
    // event.preventDefault();
    axios
      .post(`http://localhost:5000/friends`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(response => {
        console.log('post data', response.data)
      })
      .catch(err => console.log(err))
  }

  render() { 
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <div className="container">
          <div className="col">
            <input type="text" name="name" className="form-control" placeholder="name" onChange={(el) => this.handleChange(el)}/>
          </div>
          <div className="col">
            <input type="text" name="age" className="form-control" placeholder="age" onChange={(el) => this.handleChange(el)}/>
          </div>
          <div className="col">
            <input type="text" name="email" className="form-control" placeholder="email" onChange={(el) => this.handleChange(el)}/>
          </div>
          <div className="col">
            <button className="btn btn-primary px-4 mt-2 float-left" type="submit"> Add </button>
          </div>
        </div>
      </form>
    )
  }
}

export default FriendInput;