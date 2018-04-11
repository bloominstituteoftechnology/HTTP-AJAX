import React,{Component} from 'react';
import axios from 'axios';



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
    axios.get('http://localhost:5000/friends')
    .then(d => {
    this.setState({friends: d.data});
    })
    .catch( err =>{
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
savedFriends = () =>{
    const obj = { name:this.state.newFriend, email:this.state.newEmail, age:this.state.newAge}
  axios.post('http://localhost:5000/friends', obj)

    .then( saved  =>{ 
   console.log(saved); 
   this.componentDidMount();
   this.setState({newEmail:'', newFriend:'', newAge:''})            
    })
    .catch(err =>{
        console.log(err)
    })
    
}
render() {
return (
    <div>
        <h1>Friends List</h1>
        {this.state.friends.map( (f,index) => ( <div>
                                           <div>{f.name}</div> 
                                            <div>{f.age}</div>
                                           <div>{ f.email}</div>
                                           
                                        </div>
))}
    <input  type="text"
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

    <button onClick={this.savedFriends}> Add To List </button>

     </div>
)




}  

}
export default FriendsList;