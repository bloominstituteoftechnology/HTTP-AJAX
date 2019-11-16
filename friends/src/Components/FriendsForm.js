import React from 'react';
import axios from 'axios';



class FriendsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      age:'',
      nameHolder:'Enter a name',
      ageHolder:"Enter Age",
      emailHolder:"Enter Email"
    }
  }


  editFriendHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleAgeChange = e => {
    this.setState({ age: Number(e.target.value)});
  }



  handleSubmitFriend = () => {
    const name = { name: this.state.name, email:this.state.email, age: this.state.age };
    axios
      .post("http://localhost:5000/Friends", name)
      .then(response => {
          console.log("POST RESPONSE", response);
          this.props.handleSetData(response.data);
          this.setState({ name:'', email:'', age:''});
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
        <form>
                    
        <input 
          type="text"
          name='name'
          placeholder={this.state.nameHolder}
          onChange={this.editFriendHandler}
          value={this.state.name}
          />
        <input 
          type="number"
          name='age'
          placeholder={this.state.ageHolder}
          onChange={this.handleAgeChange}
          value={this.state.age}
          />
        
        <input 
          type="text"
          name='email'
          placeholder={this.state.emailHolder}
          onChange={this.editFriendHandler}
          value={this.state.email}
          />
        <button onSubmit={this.handleSubmitFriend} onClick={this.handleSubmitFriend}>Submit Friend</button>
        
            

        </form>

    )
  }
}




//     return (
//         <form>
                    
//         <input 
//           type="text"
//           placeholder={props.nameplaceholder}
//           onChange={props.handleNameChange}
//           value={props.name}
//           />
//         <input 
//           type="text"
//           placeholder={props.emailplaceholder}
//           onChange={props.handleEmailChange}
//           value={props.email}
//           />
        
//         <input 
//           type="number"
//           placeholder={props.ageplaceholder}
//           onChange={props.handleAgeChange}
//           value={props.age}
//           />
//         <button onSubmit={props.handleSubmitFriend} onClick={props.handleSubmitFriend}>Submit Friend</button>
        
            

//         </form>
//     )
// }
 
export default FriendsForm;