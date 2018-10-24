import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {
    
    render() {
        return(

            <form className="form-inline">
  <label className="sr-only" for="inlineFormInputName2">First Name</label>
  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane"/>

  <label className="sr-only" for="inlineFormInputName2">Age</label>
  <input type="text" className="form-control mb-2 sm-sm-2" id="inlineFormInputName2" placeholder="Age"/>

  <label className="sr-only" for="inlineFormInputGroupUsername2">Email</label>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">@</div>
    </div>

    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
  </div>

  <button type="submit" className="btn btn-primary mb-2">Submit</button>
</form>
        )
    }
}

export default Form;