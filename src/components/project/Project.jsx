import React, { Component } from 'react';
import Images from '../../Images.js'

class Project extends Component {
  constructor(props){
    super(props);
    this.images = Images();
  }

  render() {
    let projects = this.props.projects;
    let projectDisplay = null;
    if(projects){
      projectDisplay = projects.map((project, i)=>{
        return (
        <div key={i+"dd"}>
          <div>
          <img src={this.images[project.image]} alt={this.props.alt} />
          </div>
          <div className="project-intro">
              <h2>{project.name}</h2>
              <h5>{project.description}</h5>
              <a href={project.link}>Link to Project </a>
          </div>
        </div>);
      });
    }
    return (
      <div className="project">
        {projectDisplay}
      </div>
    );
  }
}

export default Project;
