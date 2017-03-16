import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    let info = this.props.data;
    if(info){
      if(info.fulladdress === ""){
        info.fulladdress = "missing";
      }
      if(info.fullname === ""){
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
