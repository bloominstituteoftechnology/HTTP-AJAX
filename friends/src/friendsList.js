import React,{Component} from 'react';
import axios from 'axios';
import SavedFriends from './savedFriends'
import DeleteFriend from './deleteFriend';
import UpdateFriend from './updateFriend';

class  FriendsList extends Component {
    constructor (props){
        super(props)
        this.state ={
            newFriend:'',
            newEmail:'',
            newAge:'',
            
            friends :[],


        }
    }
componentDidMount(){
   this.getFriends();
}
getFriends = ()=>{
    axios.get('http://localhost:5000/friends')
        .then(d => {
            this.setState({ friends: d.data });
        })
        .catch(err => {
            console.log(err)
        })
}
addFriendHandler = (event) =>{
this.setState({ [event.target.name]: event.target.value });
}
addNewEmailHandler = (event) =>{
this.setState({ [event.target.name]: event.target.value });
}
addNewAgeHandler = (event) =>{
this.setState({ [event.target.name]: event.target.value });

}
clearInput = () => this.setState({ newEmail: '', newFriend: '', newAge: '' })


//  savedFriends = () => {
//     const obj = { name: this.state.newFriend, email: this.state.newEmail, age: this.state.newAge }
//     axios.post('http://localhost:5000/friends', obj)

//         .then(saved => {
//             console.log(saved);
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     this.componentDidMount();
//     this.setState({ newEmail: '', newFriend: '', newAge: '' })
//     }
render() {
return (
    <div>
        <h1>Friends List</h1>
        <input type="text"
            placeholder="Add a Name "
            name="newFriend"
            value={this.state.newFriend}
            onChange={this.addFriendHandler}
        />
        <input type="text"
            placeholder="Add an  email "
            name="newEmail"
            value={this.state.newEmail}
            onChange={this.addNewEmailHandler}
        />
        <input type="text"
            placeholder="Add age "
            name="newAge"
            value={this.state.newAge}
            onChange={this.addNewAgeHandler}
        />
        <SavedFriends saved={this.state} getFriends={this.getFriends} clearInput={this.clearInput} />
        
        {this.state.friends.map( (f) => ( <div key={f.id}>
                                                  <div>{f.name}</div> 
                                                  <div>{f.age}</div>
                                                  <div>{ f.email}</div>
                                     <DeleteFriend id={f.id} getFriends={this.getFriends} /> 
                          <UpdateFriend id={f.id} f={f}  saved={this.state} getFriends={this.getFriends}
                          
                             clearInput ={this.clearInput}/>
                                                </div>
))}
    
        
     </div>
)
}  
}
export default FriendsList;