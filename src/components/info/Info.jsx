import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="info-image"> <img src={this.props.image} alt={this.props.alt} /></div>
        <div>
            <h1> {this.props.fullname} </h1>
            <h4> {this.props.fulladdress} </h4>
        </div>
      </div>
    );
  }
}

export default Info;
