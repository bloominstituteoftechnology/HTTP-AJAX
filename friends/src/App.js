import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Friends from './components/friends';
import AddFriend from './components/addFriend';

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearFields = e => {
    e.preventDefault();
    this.setState({
      inputName: "",
      inputAge: "",
      inputEmail: "",
    });
  }

  addFriend = (name, age, email) => {
    // e.preventDefault();
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
          // this.state.history.push('/friends');
        })
        .catch( err => {
          console.log('something went wrong trying to post new data' + err)
        });
    }
    else {
      alert("All input fields required to add data!");
    }
  }

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

  updateFriend = (arg, name, age, email) => {
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


  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <div>
          <nav>
            <Link to='/' ><div className='navLink'>Home</div></Link>
            <Link to='/friends' ><div className='navLink'>Friends List</div></Link>
          </nav>
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

          <Route path={`/friends/update/:friendId`}
            render={
              props => 
              <AddFriend {...props} 
              info={this.state} 
              handleChange={this.handleChange} 
              clearFields={this.clearFields}
              updateFriend={this.updateFriend}
              update
              // addFriend={this.addFriend}
              />
            }
          />

          <Route path={`/friends`} 
            render={ 
              props => 
              <Friends {...props} 
              info={this.state} 
              deleteFriend={this.deleteFriend}
              // updateFriend={this.updateFriend}
              />
            } 
          />
        </div>
      </div>
    );
  }
}

export default App;