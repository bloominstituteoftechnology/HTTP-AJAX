import React from 'react';
import axios from 'axios';
import EachFriend from './EachFriend.js';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      friends: []
    }
  }

  componentDidMount(){


  axios
  .get('http://localhost:5000/friends')
  .then( response => {
    this.setState({
      friends:response.data
    })
  })
  .catch(err => console.log(err))
}
  render(){
return(
<div>
  <div className="Friends">

          {this.state.friends.map(friend=> (
            <EachFriend key={friend.id} friend={friend} />
          ))}

        </div>

</div>

)

  }
}
export default Friends
