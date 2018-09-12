import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SrchBx from './components/SrchBx';
import FrdLst from './components/FrdLst';
import FrdFrm from './components/FrdFrm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      srchbx: '',
      frdlst: [],
      frdnme: '',
      frdage: Number,
      frdeml: ''
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => {
            this.setState(() => ({ frdlst: response.data }))
        })
        .catch(err => {
            console.log('Server Error', err);
        })
}

  handleBtnSbmt = event => {
    let adfrd = this.state.frdlst.slice();
    adfrd.push({
      name: this.state.frdnme,
      age: this.state.frdage,
      email: this.state.frdeml
    });
    this.setState({
      frdlst: adfrd,
      frdnme: '',
      frdage: Number,
      frdeml: ''
    });
    event.preventDefault();
  };

  handleIptChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render() {
    const fltrfrd = this.state.frdlst.filter(item => {
      return item.name.toLowerCase().includes(this.state.srchbx.toLowerCase());
    });
    if (this.state.frdlst.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="App">
          <SrchBx iptnme="srchbx" textOnProps={this.state.srchbx} srchChange={this.handleIptChange} />
          <FrdLst list={fltrfrd} />
          <FrdFrm 
            iptone="frdnme"
            iptonvl={this.state.frdnme}
            ipttwo="frdage"
            ipttwvl={this.state.frdage}
            iptthr="frdeml"
            iptthvl={this.state.frdeml}
            hdlChange={this.handleIptChange} 
            btnSbmt={this.handleBtnSbmt} />
        </div>
      );
    }
  }
}

export default App;
