import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value });  //name, age, email? ${this.state.} or spread in newFriend data?
      };  // name here is name of input


    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                const newFriend = {
                    "name": this.state.name,
                    "age": this.state.age,
                    "email": this.state.email
                  };
                this.props.formSubmitHandler(newFriend);
                this.setState({ name: '', age: '', email: ''})
            }}>  
            <input 
              type="text"
              onChange={this.handleTextInput}
              name="name"
              placeholder="name"
              value={this.state.name}
            />
            <input 
              type="text"
              onChange={this.handleTextInput}
              name="age"
              placeholder="age"
              value={this.state.age}
            />
            <input 
              type="text"
              onChange={this.handleTextInput}
              name="email"
              placeholder="email"
              value={this.state.email}
            />
            <button typeof="submit">Submit</button> 
          </form>
        )
    }
}
export default Form;

//form need on submit. button needs typeof submit
