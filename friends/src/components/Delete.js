import React from 'react' ;
import axios from 'axios' ;

const URL = "http://localhost:5000/friends" ;

class Delete extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {}
    }
    handleDelete = id => {
        alert(id);
        axios
            .delete(`${URL}/${id}`)
            .then(response => {
                console.log("MY-DELETE-RESPONSE: ",response) ;
                window.location.reload() ;
                }
            )
            .catch(error => {
                alert('server error! (see console)') ;
                console.log(error) ;
                }
            )
    }
    render() {
        return(
            <button onClick={()=>this.handleDelete(this.props.deleteId)}>Delete Friend!</button>
        )
    }
}
export default Delete ;