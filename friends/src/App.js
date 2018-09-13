import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import {ThemeProvider} from 'styled-components';
import theme from './styled/theme'
import {createGlobalStyle} from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null,
      input: {
        name: '',
        age: '',
        email: ''
      },
      editing: false 
    };
    console.log(this.state.friends);
  }

  handleInput = (event) => {
    this.setState({
      input: {...this.state.input, [event.target.name]:event.target.value}
    })
  }
  editingMode = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  deleteFriend = (friend) => {
    let id = friend.id;
    console.log(id);
    if (window.confirm(`Are you sure you want to delete ${friend.name} from your friends list?`)){
      axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      response.data.map((element, i) => element.id = i+1)
      console.log(response.data);        
    })
    .catch(error => {
      console.error("Server Error", error);
    });
    alert(`${friend.name} was removed from your friends list`)
    }
  };

  postFriend = () => {
    axios
      .post("http://localhost:5000/friends", {
        id: this.state.friends.length + 1,
        name: this.state.input.name,
        age: this.state.input.age,
        email: this.state.input.email
      })
      .then(response => {
        console.log(response);
        this.setState({
          input: {name: '', age:'', email:''}
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchFriends();
  }

  componentDidUpdate(prevProps, prevState){
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        if(response.data !== prevState){
          console.log('testing')
          this.setState(() => ({ friends: response.data }));
        }        
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    
  }

  fetchFriends() {
    axios
      .get("http://localhost:5000/friends")

      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <FriendsForm friends={this.state.friends} 
        input={this.state.input} 
        handleInput={this.handleInput} 
        fetchFriends={this.fetchFriends}
        postFriend={this.postFriend}/>
        
        <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend}  ediit/>
      </div>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
 *{
  box-sizing: border-box;
 }
`