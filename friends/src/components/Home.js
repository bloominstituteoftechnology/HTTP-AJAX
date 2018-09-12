import React, { Component } from 'react';
import axios from 'axios';
import Card from './card.js';

class Home extends Component {
constructor(props){
super(props);
this.friends='';
}
	
componentDidMount(){
axios.get(`http://localhost:5000/friends`)
	.then(res =>{this.setState({friends:res});})
	.catch(err =>{console.log(err);});
}	

render(){
return(
<div>
<Card data={this.state} />
</div>
);
}
}

export default Home;