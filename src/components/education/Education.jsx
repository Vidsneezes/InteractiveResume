import React, { Component } from 'react';

class Education extends Component {
  render() {
    let education = this.props.education;
    let educationDisplay = null;
    if(education){
      educationDisplay = education.map((element,i)=>{
        return (
          <div key={i}>
            <div className="education-intro">
              <span>
                  <h2>{element.name}</h2>
                  <h3>{element.degree}</h3>
              </span>
            </div>
            <div>
              <p>{element.startDate}-{element.endDate}</p>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="education">
        {educationDisplay}
      </div>
    );
  }
}

export default Education;
