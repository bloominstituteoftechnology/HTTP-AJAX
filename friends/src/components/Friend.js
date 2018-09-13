import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      id:this.props.friend.id,
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
        
    };   
  }
  handeleInput = (event) => {
      
    this.setState({
        [event.target.name]: event.target.value,
    })
    console.log(event.target.name+": " + this.state[event.target.name]);
}
    editingMode = () => {
        this.setState({
            editing: true,
        })
    }

    submitEdit = friend => {
      console.log(friend);
      let id = friend.id
      axios.put(`http://localhost:5000/friends/${id}`, {        
        name: friend.name,
        age: friend.age,
        email: friend.email}
      ).then(response => {
        console.log(response);  
      }).catch(err => {
        console.log(err);
      })

      this.setState({
        editing:false,
      })
    }


  render() {
    if (this.props.friend) {
      return (
        <FriendContainer>
          <Delete onClick={friend => {if(!this.state.editing){this.props.deleteFriend(this.props.friend)} else {alert("Not available while editing")}}}>
            X
          </Delete>
          <FriendInfo editing={this.state.editing} onDoubleClick = {() => {if(!this.state.editing){this.setState({editing: true})}}}>
            <Strong>NAME:</Strong> {this.state.editing ? <InfoEdit onChange={this.handeleInput} name="name" value={this.state.name}/>:this.props.friend.name }
          </FriendInfo>
            


          <FriendInfo  editing={this.state.editing} onDoubleClick = {() => this.setState({editing: true})}>
            <Strong>AGE:</Strong> {this.state.editing ? <InfoEdit onChange={this.handeleInput} name="age" value={this.state.age}/>:this.props.friend.age}
          </FriendInfo>
          <FriendInfo  editing={this.state.editing} onDoubleClick = {() => this.setState({editing: true})}>
            <Strong>EMAIL:</Strong> {this.state.editing ? <InfoEdit onChange={this.handeleInput} name="email" value={this.state.email}/>:this.props.friend.email}
          </FriendInfo>
          
          {this.state.editing && <StyledButton onClick={(friend) =>{this.submitEdit(this.state)}}>Save Changes</StyledButton>}
        </FriendContainer>
      );
    } else {
      return <h1>Waiting</h1>;
    }
  }
}

// const Friend = props => {

// };

export default Friend;

const FriendContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:49%;
    margin: 20px 0; 
    border: 2px solid ${props => props.theme.colors.sideColorLight2};
    background: ${props => props.theme.colors.mainColor}
    color: ${props => props.theme.colors.sideColorLight1}
    padding:  0px 10px 30px 30px;
    line-height: 45px;
    font-size: 32px;
    h4 {
        overflow:hidden;
    }
`;
const Strong = styled.strong`
  font-weight: bold;
`;

const Delete = styled.div`
  display: flex;
  align-self: flex-end;
  font-family: impact;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.sideColorLight2};
  }
  :active {
    color: ${props => props.theme.colors.sideColorDark2};
  }
`;
const FriendInfo = styled.h4`
  overflow: hidden;
  
`;

const InfoEdit = styled.input `

font-size: 32px;
`

const StyledButton = styled.button `
  width: 100px;

`
