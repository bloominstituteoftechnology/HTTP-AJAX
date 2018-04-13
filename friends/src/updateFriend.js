import React, {Component} from 'react';
import axios from 'axios';



class UpdateFriend extends Component{

 constructor(props){
   super(props)
   console.log(props.saved.UpDateFriend);
   this.state={
       UpDateFriend: false,
       UpDatedFriend:'',
       UpDatedEmail:'',
       UpDatedAge:'',
       

}
}

upDateInfo = ()=>{
    this.setState({ UpDateFriend: !this.state.UpDateFriend})    
}
// clearUpdated = () => this.setState({ UpDatedFriend: '', UpDatedEmail: '', UpDatedAge: '' })
upDate = (id) => { 
    const upDated={};
     if (this.state.UpDatedFriend !== ''){
         upDated.name = this.state.UpDatedFriend;
     }
     if (  this.state.UpDatedEmail !=='' ){
         upDated.email = this.state.UpDatedEmail;
     }
     if (  this.state.UpDatedAge !==''){
         upDated.age = this.state.UpDatedAge;
     }

    axios.put(`http://localhost:5000/friends/${id}`, upDated)
         .then( s => { 
             console.log(s);
             
             this.props.getFriends();
         
            })
         .catch(err => 
                   console.log(err)
         )

         
     }
    



    addUpDatedFriendHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    addUpDatedEmailHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    addUpDatedAgeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }



render(){
    return (
        <div>
            <button onClick={this.upDateInfo}> Update Friend</button>
            {this.state.UpDateFriend ? <div> 
                                            <input type="text"
                                                placeholder="update Name "
                                                name="UpDatedFriend"
                                                value={this.state.UpDatedFriend}
                                                onChange={this.addUpDatedFriendHandler}
                                            />
                                            <input type="text"
                                                placeholder="update  Email "
                                                name="UpDatedEmail"
                                                value={this.state.UpDatedEmail}
                                                onChange={this.addUpDatedEmailHandler}
                                            />
                                            <input type="text"
                                                placeholder="update Age  "
                                                name="UpDatedAge"
                                                value={this.state.UpDatedAge}
                                                onChange={this.addUpDatedAgeHandler}
                                            />
                                            <button onClick={this.upDate(this.props.id)}> Save Update</button>
                                          </div> : null}

            

        </div>
    )
}


}
export default UpdateFriend;