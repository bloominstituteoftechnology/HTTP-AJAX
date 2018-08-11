import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import EditFriend from './components/editFriend';
import NewFriend from './components/newFriend';
import AllFriends from './components/allFriends';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      rev: [],
      name: "",
      age: "",
      email: "",
      clicked: [],
      editID: 2
    }
  }

  ///ASK ABOUT RESETING STATE AFTER SUBMIT AND

  componentDidMount() {
    axios.get(url).then(response => {
      let foo = response.data.reverse()
      this.setState({friends: foo})
    }).catch(function(error) {
      console.log(error)
    })
  }

  click = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = event => {
    event.preventDefault();
    console.log('submit');
    axios.post(url, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }).then(() => {
      axios.get(url).then(response => {
        console.log(response)
        let food = response.data.reverse()
        this.setState({friends: food})
      }).catch(function(error) {
        console.log(error)
      })
    })
    this.setState({name: "", age: "", email: ""})
  }

  getFriend(id) {
    let selectedFriend = '';
    this.state.friends.forEach(friend => {
      if (friend.id == id) {
        selectedFriend = friend
      }
    });
    return selectedFriend;
  }

  deleteFriend(event, id) {
    event.preventDefault();
    console.log('hi', id);
    axios.delete(`http://localhost:5000/friends/${id}`).then((response) => {
      console.log(response)
    }).catch(function(error) {
      console.log(error)
    });
    window.location = "http://localhost:3000/allFriends";

    ///ASK ABOUT RESETING STATE AFTER SUBMIT AND

    /////HERE

  }

  editFriend = (event, id) => {

    event.preventDefault();
    console.log(this.state.editID)
    axios.put(`http://localhost:5000/friends/${id}`, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }).then((response) => {
      console.log('hi')
      console.log(response.data)
      this.setState({friends: response.data})
    }).catch(function(error) {
      console.error(error)
    });
    this.setState({name: "", age: "", email: ""})
  }

  render() {
    return (<div className="App">

      <div className="left">

        <Link to="/">
          <Route path='/' render={() => {
              return <h1>Home</h1>
            }}/>
        </Link>

        <Link to="/allFriends">Show all Frieneds</Link>

        <Route path="/allFriends" render={(props) => {
            return (<div>
              <NewFriend state={this.state} click={this.click} submit={this.submit} data={this}/>
              <div className="details">
                <p>New Friend sample profile</p>
                <AllFriends data={this.state}/>
              </div>
            </div>)
          }}/>

        <Route path="/friends/:id" render={(props) => {
            return (<EditFriend state={this.state} click={this.click} editFriend={this.editFriend} id={props.match.params.id} data={this}/>)
          }}/>

        <Route path="/friends/:id" render={(props) => {
            console.log(props)
            return (<form onSubmit={(event) => this.deleteFriend(event, props.match.params.id)}>
              <button>Delete Friend</button>
            </form>)
          }}/>

      </div>

      <div className="right">
        <Route path='/allFriends' render={(props) => {
            return this.state.friends.map(friend => {
              return (<Link className="friendLink" key={friend.id} to={`/friends/${friend.id}`}>
                <AllFriends key={friend.id} name={friend.name} click={this.friendClick} data={friend}>{friend.name}</AllFriends>
              </Link>)
            })
          }}/>

        <Route path="/friends/:id" render={(props) => {
            return (<div className="friendFull">
              <AllFriends data={this.getFriend(props.match.params.id)} {...props} onLoad={() => this.setState({
                'name': props.match.params.name,
                'email': props.match.params.email,
                'age': props.match.params.age,
              })} />

//------------------------ASK ABOUT SETTING STATE AT START---------//



            </div>)
          }}/>

      </div>

    </div>);
  }
}

export default App;
