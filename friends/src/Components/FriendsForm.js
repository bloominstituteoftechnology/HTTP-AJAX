import React from 'react';
import axios from 'axios'

class FriendsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name:'',
      age: '',
      email:''
    }

  }

  addFriend(newFriend){
axios
.post('http://localhost:5000/friends',newFriend)
.then(response=> this.setState({ friends:response.data},))
.catch(err=>{console.log(err)});
      }



      handleSubmit = (event) => {
            event.preventDefault()
              const newFriend = {
                name: this.state.name,
                age: Number(this.state.age),
                email: this.state.email,
              }
              this.addFriend(newFriend);

              this.setState({
                name: '',
                age: '',
                email: ''
              })
            }



  handleChange = (event) => {
    event.preventDefault();
          this.setState({
              [event.target.name]: event.target.value
          });
      }

    render()  {
      return(
    <div className="">
      <h4>Add New Friend</h4>
    <form className='FriendForm'>
      <div className='col'>
      <label>Name: </label>
    <input name='name' value = {this.state.name}  onChange= {this.handleChange} type= 'text'/>
      </div>

      <div className='col'>
      <label>Age:  </label>
      <input name='age'  value = {this.state.age} onChange= {this.handleChange} type= 'number'/>
      </div>

      <div className='col'>
      <label>Email: </label>
    <input name='email' value = {this.state.email} onChange= {this.handleChange} type= 'text'/>
      </div>
      <button onClick={this.handleSubmit} >Submit</button>
    </form>
    </div>
    )
    }


}
export default FriendsForm
