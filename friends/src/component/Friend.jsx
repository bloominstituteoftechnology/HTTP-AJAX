import React from 'react';
import axios from'axios';
import FriendForm from './FriendForm'

export default class Friends extends React.Component {
    state = {
        friend: null,
        errorMessage: null
    }
FetchDataWithAxios = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
        this.setState({ friend: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
}

PostDataWithAxios = (friend) => {
    axios.post('http://localhost:5000/friends', friend)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

componentDidMount(){
    this.FetchDataWithAxios();
}
render(){
    return(
       <div>
           {
          this.state.friend &&
          <div>{this.state.friend.map(each => {
              return  each.id + each.name + each.age;
          })}</div>
        }
        <FriendForm  postFriend={this.PostDataWithAxios} />
       </div>
    );
}
}