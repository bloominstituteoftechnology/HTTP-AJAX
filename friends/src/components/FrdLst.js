import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FrdCrd from './FrdCrd';
import SrchBx from './SrchBx';

class FrdLst extends React.Component {
    constructor(props) {
        super();
        this.state = {
            srchbx: '',
            frdlst: []
        }
    }

    // componentWillMount = () => {
    //   localStorage.getItem('frdlst') && this.setState({
    //       frdlst: JSON.parse(localStorage.getItem('frdlst'))
    //   })
    //   console.log(localStorage.getItem('frdlst'));
    // }
    

    componentDidMount() {
        if (!localStorage.getItem('frdlst')) {
            axios
                .get("http://localhost:5000/friends")
                .then(response => {
                    this.setState(() => ({ frdlst: response.data }));
                })
                .catch(err => {
                    console.log('Server Error', err);
                });
        } else {
            console.log("Using data from localstorage");
        }
    }

    // componentWillUpdate = (nextProps, nextState) => {
    //   localStorage.setItem('frdlst', JSON.stringify(nextState.frdlst));
    // }
    

    handleIptChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        });
      }

    render() {
        const fltrfrd = this.state.frdlst.filter(item => {
            return item.name.toLowerCase().includes(this.state.srchbx.toLowerCase());
          });
        return (
            <div>
                <SrchBx iptnme="srchbx" textOnProps={this.state.srchbx} hdlChange={this.handleIptChange} />
                <div className="frdlst">
                    {fltrfrd.map((item) => (
                        <Link key={item.id} to={`/frd/${item.id}`} >
                        <FrdCrd key={item.id} item={item} />
                        </Link>
                    ))}
                </div>
            </div>
          );
    }
}

export default FrdLst;
