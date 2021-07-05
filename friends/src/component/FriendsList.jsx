import React, { Component } from 'react';
import { Link, } from 'react-router-dom';


class FriendsList extends Component {
  constructor(props) {
    super(props);
    
  }
  friendLister =()=>{
    const filterNum = parseInt(this.props.match.params.id, 10);
    return this.props.friends.filter((e)=> {if ( isNaN(filterNum) ){return e} else{  return e.id===filterNum}}).map((e,i)=>{
      return(
      <Link   className='friendListRow' id={e.id} key={i} to={`/friend/${e.id}`}>
       
        <div className='friendsListItem'>
        {e.name}
        </div>
        <div className='friendsListItem'>
        {e.age}
        </div>
        <div className='friendsListItem'>
        {e.email}
        </div>
        {e.hairColor ?  <div className='friendsListItem'>
        {e.hairColor}
        </div> : <div className='friendsListItem'>  </div>}
     
     
      </Link>
      )
    })
  }
  componentDidMount =()=>{

    
  }
  render() {
    return (
      <div className="friendsListContainer">
        <div className='friendsListTitleBar'>
          <div className='titleItem'>
            Name
          </div>
          <div className='titleItem'>
            Age
          </div>
          <div className='titleItem'>
            Email
          </div>
          <div className='titleItem'>
            Hair Color
          </div>
        </div>
        {this.friendLister()}
      </div>
    );
  }
}

export default FriendsList;
