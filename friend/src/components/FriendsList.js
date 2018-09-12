import React from 'react';

import axios from 'axios';

class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friends:[],
            loading:true
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/friends').then(res=>this.setState({friends:res.data, loading:false})).catch(err=>console.log(err));
    }
}




export default FriendsList;