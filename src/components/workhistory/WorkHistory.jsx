import React, { Component } from 'react';
import './style.css';

class WorkHistory extends Component {
  render() {
    let workhistory = this.props.data;
    let workTable = null;
    if(workhistory){
       workTable = workhistory.work.map((item, i) => {
         return( 
          <div key={i} className="workhistory-intro">
            <span className="wh-place-position">
              <h2>{item.workplace}</h2>
              <h3>{item.position}</h3>
            </span>
            <div className="wh-date-description">
              <h6>{item.startdate}-{item.enddate}</h6>
              {item.jobdes}
            </div>
          </div>
         );
      });
    }
    return (
      <div className="workhistory">
        {workTable}
      </div>
    );
  }
}

export default WorkHistory;
