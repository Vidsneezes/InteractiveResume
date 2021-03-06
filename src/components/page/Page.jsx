import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <div className="page-intro">
            <h2>{this.props.title}</h2>
        </div>
        <div>
            {this.props.children}
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Page;
