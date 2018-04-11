import React, { Component } from 'react';

class Friend extends Component {


    render(){
console.log(this.props)
console.log("poops")
        return(<React.Fragment>
                <div  class="dataContainertwo-style">
                <p>hey buddy</p>

                </div>
            </React.Fragment>  )
      
    }
}
    export default Friend;