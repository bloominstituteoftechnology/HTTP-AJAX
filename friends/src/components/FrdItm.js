import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import FrdCrd from './FrdCrd';

class FrdItm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      frd: null
    }
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.fetchFrd(id);
  }

  fetchFrd = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState(() => ({ frd: response.data.find(frd => frd.id === id) }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchFrd(newProps.match.params.id);
    }
  }

  handleRmv = event => {
    let id = parseInt(this.props.match.params.id);
    this.rmFrd(id);
  }

  rmFrd = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then((response) => {
        this.props.history.push("/");
      })
      .catch(err => {
          console.log(err);
      })
  }

  render() {
    if (!this.state.frd) {
      return <div>Loading information...</div>
    }
    return (
      <div>
        <FrdCrd item={this.state.frd} />
        <Button onClick={this.handleRmv}>Remove</Button>
      </div>
    );
  }
}

export default FrdItm;