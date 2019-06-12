import React from 'react';
import axios from'axios';

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
        <form>
            <label htmlFor="name" >Name</label>
            <input type="text" id="name"/>
            <label htnmlFor="email" >Email</label>
            <input type="email" />
            <button>Submit</button>
        </form>
       </div>
    );
}
}