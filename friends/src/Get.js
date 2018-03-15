import React, {Component} from 'react';
import axios from 'axios';


class Get extends Component{

  constructor(props){
    super(props);
    this.state = {friends:[]};
  }
  componentDidMount(){
    let self= this;
    axios.get('http://localhost:5000/friends')
      .then(function (response) {
        response['data'].forEach( (e) =>{
          let friends = self.state.friends.slice()
          friends.push(e);
          self.setState({friends:friends});
        });
        
      })
      .catch(function (error) {
          console.log(error);
      })
  }



  render(){
    if(this.state.friends.length === 0){
      return <div>nothing</div>;
    }
    else{
      return this.state.friends.map( (e,i)=>{
        return (
          <div key={i}>
            <p>{e.name}</p>
          </div>

        );
      });
    }
  }
}

export default Get;
