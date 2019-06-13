import React, { Component } from 'react';
import './App.css';
import Friends from "./components/Friends.js";
import NewFriend from "./components/NewFriend.js";
import axios from 'axios';

class App extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            friends: [],
            nextId: null,
        }
    }
    componentDidMount() {
        // this.setState((state)   =>  ({
        // }))
        this.getFriends();
    }

    addFriend   =   (name, age, email) =>   {
        console.log(this)
        axios.post("http://localhost:5000/friends", {
            name: name,
            age: age,
            email: email,
            id: this.state.nextId,
        })
        .then(data    =>  this.getFriends())
        .then(data  =>  this.setState((state)   =>  ({
            nextId: this.state.nextId + 1,
        })))
        .catch(err    =>  {
            console.log("In Catch", err);
        })
    }

    submitHandler   =   (name, age, email, id)  =>  {
        if(id === null || id === "") {
            this.addFriend(name, age, email);
        }   else {
            this.updateFriend(name, age, email, id);
        }
    }

    updateFriend    =   (name, age, email, id)  =>  {
        axios.put(`http://localhost:5000/friends/${id}`,    {
            name: name,
            age: age,
            email: email,
            id: id,
        })
        .then(data    =>  this.getFriends())
        .catch(err    =>  {
            console.log("In Catch", err);
        })
    }

    deleteFriend    =   (id)    =>    {
        // console.log(id)
        axios.delete(`http://localhost:5000/friends/${id}`)
        .then(res   =>  {
            this.getFriends();
        })
        .catch(err  =>  {
            console.log("In Catch", err);
        });
    }

    getFriends()    {
        axios.get("http://localhost:5000/friends")
        .then(data  =>  this.setState((state)   =>  ({
            friends: data.data
        })))
        .then(data  =>  {
            if(this.state.nextId === null)  {
                this.setState((state)   =>  ({
                    nextId: this.state.friends.length + 1
                }))
            }
        })
        .catch(err  =>  {
            console.log("In Catch", err);
        });
    }
  render() {
    return (
      <div className="App">
        <Friends deleteFriend={this.deleteFriend} friends={this.state.friends} />
        <NewFriend submitHandler={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
