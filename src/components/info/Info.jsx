import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="info-image"> <img src={this.props.image} alt={this.props.alt} /></div>
        <div>
            <h1> Oscar Morales </h1>
            <h4> 14 calle 13-56 planes minerva </h4>
        </div>
      </div>
    );
  }
}

export default Info;
