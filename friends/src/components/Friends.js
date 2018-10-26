import React,{ Component} from 'react';


import Friend from './Friend'

class Friends extends Component {
    constructor(props){
      super (props)
      this.state ={
          friends : ''
      }
    }
    render() {
        let friends = this.props.datauser.filter(item => {
            return item.id === parseInt(this.props.match.params.id)
          })[0];
        
        return (
            
     <div className='friendcard'> 
       <Friend {...friends} deleteFriendHandler={this.props.deleteFriendHandler}/>
     </div>
    )
        
}}
export default Friends
