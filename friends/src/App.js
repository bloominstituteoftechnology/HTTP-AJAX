import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Friends from './Components/Friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [{}],
      name: '',
      age: 0,
      email: '',
    }
  }


  addNameToList = (e) => {
    e.preventDefault();
    this.setState({name: e.target.value,
    })
  }

  addAgeToList = (e) => {
    e.preventDefault();
    this.setState({age: e.target.value,
    })
  }

  addEmailToList = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value,
    })
  }

  submitToList = (e) => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }


    Axios.post("//localhost:5000/friends", newFriend)
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(err => console.log(err));
  }



    componentDidMount() {
      Axios
        .get("//localhost:5000/friends")
        .then(Response => {
          this.setState({ friends: Response.data});
        })
        .catch( err => console.log(err));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Friends friends={this.state.friends}
             addNameToList={this.addNameToList}
             addAgeToList={this.addAgeToList}
             addEmailToList={this.addEmailToList}
              submitToList={this.submitToList}
              />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
