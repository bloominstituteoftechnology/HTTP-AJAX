import React from "react";
import Friend from "./Friend";
import FriendForm from "./FriendForm"

class FriendList extends React.Component{
    constructor(){
        super();
        this.state={
          data:[],
          deleteFriends:false

        }
    }

    componentDidMount() {
        const axios = require('axios');
        console.log("Comp did mount")

// Make a request for a user with a given ID
        axios.get( "http://localhost:5000/friends")
            .then( response => {
                // handle success

                // always executed
                console.log(response.data);
                this.setState({data:response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });

    }

    // deleteFriend = (e, id) => {
    //     e.preventDefault();
    //     let unDeletedFriends = this.state.data.slice();
    //     unDeletedFriends = this.state.data.filter(friend => !this.state.data.id);
    //     this.setState({data: unDeletedFriends});
    // };

    handler = ( friend) => {

        let newFriendList = this.state.data.slice();

        newFriendList.push(friend);
        this.setState({data: newFriendList});


        //post request



        const axios = require('axios');
        console.log("called post");
        axios.post("http://localhost:5000/friends", {friend} )
            .then(function (response) {
                console.log(response);
            })
             .catch(function (error) {
                console.log(error);
            });


     }



    render() {
        return (

            <div className="friendList">
                {
                    this.state.data.map(friend => {
                        return <Friend key={friend.id} friend={friend}deleteHandler={this.deleteFriend}/>
                    })
                }

                <FriendForm handler = {this.handler} />

            </div>

        )
    }

}

export default FriendList
