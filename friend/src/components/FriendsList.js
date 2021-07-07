import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friends:[],
            loading:true
        }
    }
    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(res=>this.setState({friends:res.data, loading:false}))
        .catch(err=>console.log(err));
    }
    goToForm = () => {
        this.props.history.push('/');
    }

render(){
    if(this.state.friends.length===0 && this.state.loading===false){
        return(
            <h1>Sorry, no data</h1>
        )
        }
    return (
        <div className="friendsList">
            {this.state.friends.map((e,i)=>
           
            <Link to={`/friends/${e.id}`}key={i}>
                <div className='card'>
                        
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                        
                    </div>
   
                
            </Link>)}
            <button className='homepage-btn' onClick={() => this.props.history.push('/')}>Go back to home page.</button>
        </div>
    
            


            )}}


export default FriendsList;