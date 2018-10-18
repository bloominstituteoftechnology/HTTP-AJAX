import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, NavLink, Link} from 'react-router-dom';
import axios from 'axios';
import Friend from './components/Friend';
import FriendList from './components/FriendList';
import Form from './components/Form';
import FriendPage from './components/FriendPage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      newFriend: {
          name: '',
          age: '',
          email: ''
      },
      formType: ''
    }

  }
 

  handleInput = (e) => {
    this.setState({
      newFriend: { ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  submitFriend = (id, newFriend) => {
   /*  let newFriend = this.state.newFriend;
    this.state.formType === 'add' ?
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => this.setState({friends: response.data})) : */

      axios.put(`http://localhost:5000/friends/${id}`, newFriend).then(response => this.setState({friends: response.data}));
  
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(response =>  
     this.setState({friends: response.data})); 
    
  }

  activeFormType = (e) => {
    e.target.classList.contains('add') ? this.setState({formType: 'add'}) :
    this.setState({formType: 'change'})
    console.log(e.target.classList.contains('add'));
  }

  

  componentDidMount(){
    axios
        .get(' http://localhost:5000/friends')
        .then(response => this.setState({friends: response.data}))
  }
  mutate = () => {
    this.setState({formType: 'mutate'});
  }





  render() {
    return (
      <Router>
      <div className="App">
      <header>
        <h1><h1>FRIENDS</h1></h1>

        <h3>howmanyofushavethem</h3>
        <nav>
          <NavLink to='/'><div>Home</div></NavLink>
          <div>Need Friends? Make Up Your Own <NavLink to="/friend-form"><span className='here add' onClick={this.activeFormType}>Here</span></NavLink></div>
          <div>Dislike Your Pals? Mutate Your Homies <NavLink to="/friend-form"><span className='here change' onClick={this.activeFormType}>Here</span></NavLink> </div>
        </nav>
      </header>
      
      <Route exact path="/" render={(props)=> <FriendList {...props} friends={this.state.friends}/>}/>
      <Route path="/friends/:id" render={(props) => <Friend {...props} formType={this.state.formType}
                                                                       submitFriend={this.submitFriend} 
                                                                       friends={this.state.friends}
                                                                       handleInput={this.handleInput}
                                                                       mutate={this.mutate}
                                                                       deleteFriend={this.deleteFriend}
                                                                       />} />
 
      <Route path="/friend-form" 
           render={(props) => <Form {...props} 
                                    

                                    onChange={this.handleInput} 
                                    newFriend={this.state.newFriend}
                                    submitFriend={this.submitFriend}
                                    
                                    formType={this.state.formType} />}/>


      </div>
      </Router>
    );
  }
}

export default App;
