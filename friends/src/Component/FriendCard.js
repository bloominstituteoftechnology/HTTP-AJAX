import React, { Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';
import axios from 'axios'
import UpdateForm from './UpdateForm'
import {Link } from "react-router-dom";

class FriendCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return(
            <div>
                {this.props.boo.map( (item) => (
                    <Card key = {item.id}> 
                    <CardTitle>    {item.name} </CardTitle>
                    <CardText>   {item.age} </CardText> 
                    <CardText>  {item.email} </CardText>  
                    <Button onClick = { () => {
                        axios     
                        .delete(`http://localhost:5000/friends/${item.id}`)
                           .then(response => {
                                this.props.refresh(response);
                           })
                           .catch(err => {
                             console.log(err)
                           });
                        
                    }}> Delete </Button>
                    {/* <Button onClick = {() => <UpdateForm id=item.id> Update </Button> */}
                    <Link to = {`/updateform/${item.id}`}>
                        <Button> Update </Button>
                    </Link>
                    </Card>
                ) )}
            </div>
    )
}
}

export default FriendCard;