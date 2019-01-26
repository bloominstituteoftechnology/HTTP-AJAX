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

    updateFriend = (id, inputName,inputAge, inputEmail ) => {
        const axios = require('axios');
        console.log("put delete ");
        let url = "http://localhost:5000/friends/" + id;
        let friend = {
            name:inputName,
            age:inputAge,
            email:inputEmail
        }
        console.log(url)
        axios.put(url, friend)
            .then(function (response) {
                this.setState({data:response.data})
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    handler = ( friend) => {


        const axios = require('axios');
        console.log("called post");
        axios.post("http://localhost:5000/friends", friend  )
            .then(function (response) {
                console.log("posted",response);
                this.setState({data:response.data});
            })
             .catch(function (error) {
                console.log(error);
            });

     }


     deleteHandler = (id) => {

         const axios = require('axios');
         console.log("called delete ");
         let url = "http://localhost:5000/friends/" + id;
         axios.delete(url)
             .then(function (response) {
                 console.log("DELETE RESPONSE",response);
                 let newdata = response.data;
                 this.setState({data:newdata})
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
                        return <Friend key={friend.id} friend={friend} deleteHandler={this.deleteHandler} updateFriend={this.updateFriend}/>
                    })
                }

                <FriendForm handler = {this.handler} />

            </div>

        )
    }

}

export default FriendList
