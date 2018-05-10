import React, { Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';
import axios from 'axios'

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
                                this.forceUpdate();
                           })
                           .catch(err => {
                             console.log(err)
                           });
                        
                        
                    }}> Delete </Button>
                    </Card>
                ) )}
            </div>
    )
}
}

export default FriendCard;