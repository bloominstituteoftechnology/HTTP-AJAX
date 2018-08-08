import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 

const DeleteDiv = styled.div `
    width: 100%; 

`;
class FriendPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        console.log(this.props)
        return (

            <DeleteDiv>
                <Link to ="/">Return to homepage</Link>
                <h1>Delete Friend</h1>
                <div><h1>{this.props.match.params.name}</h1></div>
                <div><button onClick = {() => this.props.delete( this.props.match.params.name)}>It's not hard to say goodbye just click here</button></div>
                <div>Update Friend Below</div>
                <h1>Name</h1>
                <input placeholder = "Update name.." name = 'name'/>
                <h1>Age </h1>
                <input type="text" placeholder = "Update Age ... " name = 'age'/>
                <h1>Email </h1>
                <input type="text" placeholder = 'Update email..'  name ='email'/>
                <br/>
                <button onClick = {() => this.props.update(this.props.match.params.name)}>Update Friend</button>



            </DeleteDiv>
        ); 
    }
}

export default FriendPage; 