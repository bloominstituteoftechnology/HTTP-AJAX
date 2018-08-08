import React from 'react'; 
import styled from 'styled-components'; 


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
                
                <h1>Delete Friend</h1>
                <div><h1>{this.props.match.params.name}</h1></div>
                <div><button onClick = {() => this.props.delete(this.props.match.params.name)}>It's not hard to say goodbye just click here</button></div>


            </DeleteDiv>
        ); 
    }
}

export default FriendPage; 