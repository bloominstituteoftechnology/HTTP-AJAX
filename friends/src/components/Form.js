import React from 'react';
import axios from 'axios';



class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name  :  '',
            age   :  '',
            email :  ''
  }
}

  changeHandler = event => {
    event.preventDefault();

        this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      const { name, age, email } = this.state
      axios 
      .post('http://localhost:5000/friends', { name,
                                               age,
                                               email })
      .then(response => {
            this.props.updateFriends(response.data)
            this.setState({ name : '',
                            age : '',
                            email : ' ',
                          })
       })
       .catch(err => console.log(err)) 
  }

  //RENDER FUNCTION
  render() {  
      console.log(this.props);
    
    return (
        <div className = "form-div">
            <form onSubmit = {this.handleSubmit}>
                <div> Name : <input type = 'text'  onChange = {this.changeHandler}  name = "name"   value = {this.state.name} /> </div>
                <div> Age :  <input type = 'text'  onChange = {this.changeHandler}  name = "age"    value = {this.state.age}/>  </div>
                <div> Email : <input type = 'text' onChange = {this.changeHandler}  name = "email"  value = {this.state.email}/>  </div>
                <button >Add Friend</button>
            </form>
        </div>
    );
  }
}

export default Form;

