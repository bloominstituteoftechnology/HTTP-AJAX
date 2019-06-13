import React from 'react';
 class Form extends React.Component{
     constructor(props){
         super(props)
         this.state=({
            name:"Name",
            age:"Age",
            email:'Email',
            value: 'Add Friend',
            target:''
        })
     }
     getFriend = async (id) =>{
        await this.props.get()
        const newFriend = this.props.data.find(friend => friend.id === Number(id))
        console.log(newFriend)
        this.setState({
            name: newFriend.name,
            age: newFriend.age,
            email:newFriend.email,
            value: "Update",
            target: id,
        })
        }
        componentDidMount(){
            if(this.props.location.pathname === `/${this.props.match.params.id}/update`) {
                this.getFriend(this.props.match.params.id)
            } 
        }
   render(){
    return (
        <div>
        <h1>{this.state.value}</h1>
        <form onSubmit ={(e) =>this.props.submit(e , this.state.target)}>
            <input type='text'  onChange={(e) =>this.props.inputValue(e.target.value, 'name')} placeholder={this.state.name}/>
            <input type='text' onChange={(e)=>this.props.inputValue(e.target.value, 'age')} placeholder={this.state.age} />
            <input type='email' onChange={(e)=>this.props.inputValue(e.target.value, 'email')} placeholder={this.state.email}/>
            <input type='submit' value={this.state.value} />
        </form>
        </div>
    )
}
 }
export default Form