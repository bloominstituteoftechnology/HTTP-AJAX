import React ,{Component} from 'react'; /*Importing React and the component class from React*/
import axios from 'axios'; /*Importing axios, which lets you make API calls in React*/

class FriendList extends Component{
    state = {friends:[]}; /*Established state and created an empty array called friends*/

    componentDidMount(){
        this.getFriends(); /*Running the function getFriends*/
    }

    getFriends = () => { /*Function that gets list of friends from server*/
        axios.get('http://localhost:5000/friends').then(response => { /*Getting the json array of friends from the server and saving it to a variable*/
            console.log(response.data);
            this.setState({friends:response.data}); /*Taking the data we got from the server in form of a variable and setting it to the friends array in the state*/
        }).catch(error => {
            console.log(error);
        }); 
    }

    handleNewFriend = event => { /*Creating function that takes info entered in form and send it to the server as a new friend*/
        event.preventDefault(); /*Prevent page from refreshing when submit button hit*/
        
        let newFriend = { /*Creating object that contains the information entered in the form*/
            name: document.getElementById('name-input').value,
            age: document.getElementById('age-input').value,
            email: document.getElementById('email-input').value
        };
        axios.post('http://localhost:5000/friends', newFriend).then(response => { /*Sending the newFriend object to the server to add to the list of friends*/
            console.log(response);
            this.getFriends();  /*Refreshing the list of friends*/
        }).catch(error => { console.log(error) });
    };

    handleEditFriend = event => { /*Creating function that takes info from edit form and sends it to the server to update a friend's data*/
        event.preventDefault(); /*Prevent page from refreshing when submit button hit*/

        let newFriend = { /*Creating object that contains the information entered in the form*/
            age: document.getElementById('age-edit').value,
            email: document.getElementById('email-edit').value
        };
        axios.put(`http://localhost:5000/friends/${document.getElementById("name-edit").value}`, newFriend).then(response => { /*Sending the newFriend object to the server to update the friend that matches the id sent in the URL*/
            console.log(response);
            this.getFriends();  /*Refreshing the list of friends*/
        }).catch(error => { console.log(error) });
    };

    handleDeleteFriend = event => { /*Creating function that deletes a friend from the list*/
        axios.delete(`http://localhost:5000/friends/${event.target.dataset.friend}`).then(response =>{ /*Sending the server the id of the friend we want to delete and telling it to delete that friend*/
            console.log(response);
            this.getFriends(); /*Refreshing the list of friends*/
        });
    };

    render(){
        return (
            <div>
                {this.state.friends.map((element,index) => { /*Iterating over the friends array in the state and returning a div that displays the information*/
                    return(
                        <div key={index}>
                            <p>Name: {element.name}</p>
                            <p>Age: {element.age}</p>
                            <p>Email: {element.email}</p>

                            <button data-friend={element.id} onClick={this.handleDeleteFriend}>Delete</button> {/*Attaches handleDeleteFriend to button so it is run when submit is clicked*/}
                        </div>
                    );
                })}

                <form>
                    <input type="text" id="name-input"></input>
                    <input type="number" id="age-input"></input>
                    <input type="text" id="email-input"></input>
                    <input type="submit" onClick={this.handleNewFriend}></input> {/*Attaches handleNewFriend to button so it is run when submit is clicked*/}
                </form>

                <form>
                    <select id="name-edit">
                        {this.state.friends.map((element, index) => <option key={index} value={element.id}>{element.name}</option>)}
                    </select>
                    <input type="number" id="age-edit"></input>
                    <input type="text" id="email-edit"></input>
                    <input type="submit" onClick={this.handleEditFriend}></input> {/*Attaches handleEditFriend to button so it is run when submit is clicked*/}
                </form>
            </div>
        );
    };
}

export default FriendList;