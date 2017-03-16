import React, { Component } from 'react';

class WorkHistory extends Component {
  render() {
    let workhistory = this.props.workHistory;
    let workTable = null;
    if(workhistory){
       workTable = workhistory.work.map((item, i) => {
         return( 
          <div key={i} className="workhistory-intro">
            <span>
              <h2>{item.workplace}</h2>
              <h3>{item.position}</h3>
            </span>
            <h6>{item.startdate}-{item.enddate}</h6>
            <div>
              <p>{item.jobdes}</p>
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
