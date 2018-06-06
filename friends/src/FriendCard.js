import React , { Component } from 'react';
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import FriendDetails from './FriendDetails';
import axios from 'axios';

class FriendCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
    
        }
    }

    componentDidMount(){
        this.state.props;
        console.log(this.state.props);
    }

    deleteUser =(id) =>{
        axios.delete(URL+"/"+id)
          .then(res =>{
              return this.setState({friends: res.data});
          })
    }
    render() {
        return(
            <div className = "friends">
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <Card key = {friend.id} className = "friend">
                                <CardBody>
                                    <CardTitle>Name - {this.state.friends.name}</CardTitle>
                                    <CardSubtitle>Age - {this.state.friends.age}</CardSubtitle>
                                    <CardText>Email - {this.state.friends.email}</CardText>
                                    <br/>
                                </CardBody>
                            </Card>            
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendCard;
