import React, { Component } from 'react';
import {Row, Col, Fade} from 'reactstrap';
import axios from 'axios';

class FriendCard extends Component {
    constructor(props) {
        super(props),
        this.state = {
            fadeIn: true,
            friends: [],
            toRender: {}
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id;
        id--;
        if (this.state.friends.length === 0) {
        axios.get('http://localhost:5000/friends')
        .then( ({data}) => {
            console.log("FriendCard-Axios response.data",data);
            let {name, age, email} = data[id];
            this.setState({ friends: data });
            console.log("this.state.friends",this.state.friends);
        })
        .catch( e => console.log(e) );
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     const {name, email, age} = this.props.friends
    //     console.log(name, email, age);
    //     // this.props.match.
    //     // this.setState({ fadeIn: false });
    //     this.setState({ fadeIn: true });
    //     // console.log(this.props);
    //     // console.log(this.props.friends);
    //     // const {friends} = this.props.friends;
    //     // console.log(friends);
    //     // const index = this.props.match.params.id;
    //     // console.log(':id',index)
    //     // const friend = friends.filter( (friend, i) => { friend.id === index } );
    //     // this.setState({ toRender: friend });
    // }
    // // componentWillUpdate(nextProps, nextState) {
    // //     this.setState({ fadeIn: false });
    // // }
    // componentDidUpdate(prevProps, prevState) {
    //     // this.setState({ fadeIn: true });
    // }
    
    
    render() {
        console.log("this.props.friends.[...match.params.id",this.props.friends[this.props.match.params.id]);
        let id = this.props.match.params.id;
        id--;
        if( this.state.friends.length === 0) {
            console.log("state.friends VOID")
            // this.componentDidMount();            
            return <Col><p>Loading friend Card</p></Col>
        } else if (this.state.friends.length !== 0) {
            let {name, age, email} = this.state.friends[id];
            console.log("name, email, age",name, email, age);
            return (
                <Col>
                    <p>Hello From FriendCard.</p>
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{age}</p>
                    </Fade>
                </Col>
            );
        } else {
            console.log(".friends VOID")
            let {name, age, email} = this.props.friends[id];
            console.log("name, email, age",name, email, age);
            return (
                <Col>
                    <p>Hello From FriendCard.</p>
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                        <p>Name: {name}</p>
                        <p>email: {email}</p>
                        <p>age: {age}</p>

                    </Fade>
                </Col>
            );
        }
    }
}

export default FriendCard;