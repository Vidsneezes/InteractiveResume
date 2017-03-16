import React, { Component } from 'react';

class WorkHistory extends Component {
  render() {
    let workhistory = this.props.workHistory;
    let workTable = null;
    if(workhistory){
       workTable = workhistory.work.map((item, i) => {
         return( 
          <div className="workhistory-intro">
            <span>
              <h2>Cracker Barrel</h2>
              <h3>Server</h3>
            </span>
            <h6>September 2013-October 2015</h6>
            <div>
              <p>Main duty involved serving customers and cleaning tables</p>
            </div>
          </div>
         );
      });
    }
    return (
      <div className="workhistory">
        <div className="workhistory-intro">
            <span>
                <h2>Cracker Barrel</h2>
                <h3>Server</h3>
            </span>
            <h6>September 2013-October 2015</h6>
        </div>
        <div>
            <p>Main duty involved serving customers and cleaning tables</p>
        </div>
      </div>
    );
  }
}

export default WorkHistory;
