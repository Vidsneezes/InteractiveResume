import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div>
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div className="project-intro">
              <h2>Clicker Do</h2>
              <h5>a long project to build great things.</h5>
        </div>
      </div>
    );
  }
}

export default Project;
