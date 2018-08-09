import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 

const DeleteDiv = styled.div `
    padding-left: 30px; 
    padding-bottom: 30px; 
    width: 100%; 
    background: black;
    color: white;
    padding-top: 10px;
    border 1px inset blue;
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        
        text-decoration: underline;
    }
    input{
        margin-bottom: 30px;
    }
    input:hover{
        border: 3px solid blue;
        cursor: pointer; 
    }
    button{
        margin-bottom: 25px;
        background: black;
        color: white;
    }
    button:hover{
        cursor:pointer; 
        background: blue;
        
        height: 50px; 
        
    }

`;


class FriendPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        console.log(this.props); 
        const friend = this.props.friends.filter(frie => frie.name === this.props.match.params.name)
        console.log(friend)
        let friendAge; 
        let friendEmail; 
        if(friend.length){
            friendAge = friend[0].age;
            friendEmail = friend[0].email;
        }
    
        return (

            <DeleteDiv>
                <Link to ="/">Return to homepage</Link>
                <h1>Delete Friend</h1>
                <div><h1>{this.props.match.params.name}  {friendAge}  {friendEmail}</h1></div>
                <p>Deleting cannot be undone.</p>
                <div><button onClick = {() => this.props.delete( this.props.match.params.name)}><Link to = '/'>It's not hard to say goodbye just click here</Link></button></div>
                <div>Update Friend Below</div>
                <p>Your friends information has been entered in as a place holder. You will have to enter the information in again to update your friend.</p>
                <h1>Name</h1>
                <input placeholder = {`${this.props.match.params.name}`} name = 'name' value ={this.props.name} onChange={this.props.onChange}/>
                <h1>Age </h1>
                <input type="text" placeholder = {`${friendAge}`} name = 'age' value ={this.props.age} onChange={this.props.onChange}/>
                <h1>Email </h1>
                <input type="text" placeholder = {`${friendEmail}`}  name ='email' value ={this.props.email} onChange={this.props.onChange}/>
                <br/>
                <form >
                    <button onClick = {() => this.props.update(this.props.match.params.name)}><Link to= '/'>Update Friend</Link></button>
                </form>

            </DeleteDiv>
        ); 
    }
}

export default FriendPage; 