import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Friends from './components/friends';
import AddFriend from './components/addFriend';

// server url
let url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: [],
      inputName: '',
      inputAge: '',
      inputEmail: '',
    }
  }

  // request data from server and setState with response
  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  // updates state keys (inputName, inputAge, inputEmail) as user is typing in input fields; invoked with onChange
  // passed as props to ADDFRIEND component
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // used for the clear button to reset our state keys (inputName, inputAge, inputEmail) and in turn clears our input fields
  // passed as props to ADDFRIEND component
  clearFields = e => {
    e.preventDefault();
    this.setState({
      inputName: "",
      inputAge: "",
      inputEmail: "",
    });
  }

  // invoked when a new friend object is to be created, sends request to server to create new object and clears state keys (inputName, inputAge, inputEmail)
  // passed as props to ADDFRIEND component
  addFriend = (name, age, email) => {
    // we want to check if all the input fields are populated befoe sending server request
    if(this.state.inputName && this.state.inputAge && this.state.inputEmail){ 
      axios
        .post(url, {name, age , email})
        .then(res => {
          console.log(res)
          this.setState({
            data: res.data,
            inputName: '',
            inputAge: '',
            inputEmail: '',
          });
        })
        .catch( err => {
          console.log('something went wrong trying to post new data' + err)
        });
    }
    else {
      alert("All input fields required to add data!");
    }
  }

  // invoked when delete button is clicked; sends request to server to remove object located at specific location
  // passed as props to FRIEND component
  deleteFriend = arg => {
    axios
      .delete(`${url}/${arg}`)
      .then(res => {
        this.setState({
          data: res.data,
        });
      })
      .catch(err => {
        console.log("something went wrong deleting data" + err)
      });
  }

  // invoked when we want to update a friend with the new information; requests server to update friend at position with new name, age, email info
  // passed as props to ADDFRIEND component
  updateFriend = (arg, name, age, email) => {
    // we want to check if all input field are populated before sending server request
    if(this.state.inputName && this.state.inputAge && this.state.inputEmail) {
      axios
        .put(`${url}/${arg}`, {name, age, email})
        .then(res => {
          this.setState({
            data: res.data,
            inputName: '',
            inputAge: '',
            inputEmail: '',
          });
        })
        .catch(err => {
          console.log('something went wrong trying to update data' + err)
        });
    }
    else {
      alert("All input fields required to update data!");
    }
  }

  // used to make changes to our state keys (inputName, inputAge, inputEmail) when we click the button for update
  // passed as props to FRIEND component
  editFriend = (name, age, email) => {
    this.setState({
        inputName: name,
        inputAge: age,
        inputEmail: email,
    });
  }

  // used to make changes to our state keys (inputName, inputAge, inputEmail) when we click the button to add new friend
  // passed as props to FRIEND component
  addBtnClear = e => {
    this.setState({
      inputName: '',
      inputAge: '',
      inputEmail: '',
  });
  }


  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <div>
          <nav>
            <Link to='/' ><div className='navLink'>Home</div></Link>
            <Link to='/friends' ><div className='navLink'>Friends List</div></Link>
          </nav>
          
          {/* {renders when we click on add new friend button; shows our add form} */}
          <Route path={`/friends/addFriend`}  
            render={
              props => 
              <AddFriend {...props} 
              info={this.state} 
              handleChange={this.handleChange} 
              clearFields={this.clearFields}
              addFriend={this.addFriend}
              />
            }
          />

          {/* {renders when we click on add new friend button; shows our update form} */}
          <Route path={`/friends/update/:friendId`}
            render={
              props => 
              <AddFriend {...props} 
              info={this.state} 
              handleChange={this.handleChange} 
              clearFields={this.clearFields}
              updateFriend={this.updateFriend}
              />
            }
          />

          {/* {renders our friends list and shows each friend as a card} */}
          <Route path={`/friends`} 
            render={ 
              props => 
              <Friends {...props} 
              info={this.state} 
              deleteFriend={this.deleteFriend}
              editFriend={this.editFriend}
              addBtnClear={this.addBtnClear}
              />
            } 
          />

        </div>
      </div>
    );
  }
}

export default App;