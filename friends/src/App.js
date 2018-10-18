import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom'
import FormPage from './components/FormPage'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state ={
        friends: [],
        newFriend: {
          name: '',
          age: '',
          email: '',
        }
      }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response)=> this.setState({friends: response.data}))
      .catch((error)=> console.log('iz not werking'))
  }

  changeHandler = (e) => {
    e.preventDefault()
    this.setState({newFriend:{...this.state.newFriend, [`${e.target.name}`]:  e.target.value}})
      console.log(e.target.value)
  }

   inputNewFriend = (e) => {
     e.preventDefault()
       if(this.state.newFriend.name === "") {
         console.log('name cannot be blank');
       } else {
         axios.post('http://localhost:5000/friends', this.state.newFriend)
         .then((response) => 
             this.setState({friends: response.data, newFriend: {name: "", age: "", email:""  }}), console.log(this.props))
         .catch((error) => console.log('it did not save'))

         // this.setState({newFriend:{name: '', age: '', email: ''}})
       }
   }

   deleteFriend = (event, id) => {
     event.preventDefault()
     axios.delete(`http://localhost:5000/friends/${id}`)
     .then((response) => this.setState({friends: response.data, newFriend: {name: "", age: "", email:"" }}))
     .catch(()=> console.log('nope, still there'))
   }

   updateFriend = (e) => {
     console.log(e.target.id);
   }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) =><Friends 
          {...props}
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          updateFriend={this.updateFriend}
          /> } />
        <Route 
          path='/formPage' 
          render={(props) => <FormPage
          {...props}
          friends={this.state.friends}
          newFriend={this.state.newFriend}
          changeHandler={this.changeHandler}
          inputNewFriend={this.inputNewFriend}
          />}/>
      </div>
    );
  }
}

const Friends = props => {
  return(
      <div>
        My friends
        <div>
        <Link to='/formPage'>Add New Friend</Link>
        {props.friends.map(item => (
            <div className="friends" key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.age}</p>
              <p>{item.email}</p>
              <button id={item.id} onClick={(event) => props.deleteFriend(event, item.id)}>Delete</button>
              <button id={item.id} onClick={props.updateFriend}>Edit</button>
              <Route path="http://localhost/:id" render={(props) => <EditForm {...props} friends={item}  />}  />
            </div>
        ))}
        </div>

      </div>
  )
}

const EditForm = props => {
  return(
          <form>
            <input placeholder="name" onChange={props.changeHandler} type='text' name="name" value={props.newFriend.name}></input>
            <input placeholder="age" onChange={props.changeHandler}type='text' name='age' value={props.newFriend.age}></input>
            <input placeholder='email' onChange={props.changeHandler} type='text' name='email' value={props.newFriend.email}></input>
            <button onClick={props.editFriend}>Edit</button>
          </form>
      )

}

export default App;
