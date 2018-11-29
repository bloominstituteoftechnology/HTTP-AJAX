import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

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
html {
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  background: #8BA6A9;
  margin: 0;
  }
`;
const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #BEA8AA;
  border-radius: 10px;
  margin: 5%;
  background: #272932;

`;

const H1 = styled.h1`
font-size: 3rem;
color: #F1F7ED;
font-family: cursive;
border-bottom: 2px solid #A7CECB;
margin: 5% 0;
`

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      friends: [],
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((response) => {
				this.setState({
					friends: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
  }
  
addFriend = (friend) => {
    axios
    .post(`http://localhost:5000/friends`, friend )
    .then((response) => {
      this.setState({
        friends: response.data
      });
    })
    .catch(err => console.log(err));
  }

 deleteFriend = (friend) => {
   axios
   .delete(`http://localhost:5000/friends/${friend}` )
   .then((response) => {
    this.setState({
      friends: response.data
    });
  })
  .catch(err => console.log(err));
 } 

 
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<AppContainer>
          <H1>View Our Current Friend List</H1>
					<FriendList data={this.state.friends} deleteFriend={this.deleteFriend} />
          <H1>Add Yourself to Our Friend List</H1>
					<FriendForm
						addFriend={this.addFriend}
					/>
				</AppContainer>
			</React.Fragment>
		);
	}
}

export default App;
