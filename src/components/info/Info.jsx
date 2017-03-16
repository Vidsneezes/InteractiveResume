import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    let info = this.props.info;
    if(info){
      if(info.fulladdress === null){
        info.fulladdress = "missing";
      }
      if(info.fullname === null){
        info.fullname = "missing";
      }
    }
    return (
      <div className="info">
        <div className="info-image"> <img src={this.props.image} alt={this.props.alt} /></div>
        <div>
            <h1> {info.fullname} </h1>
            <h4> {info.fulladdress} </h4>
        </div>
      </div>
    );
  }
}

export default Info;
