import React, { Component } from 'react';

class Hobby extends Component {
  render() {
    let hobby =  this.props.data;
    let hobbyDisplay = null;
    if(hobby){
      hobbyDisplay = hobby.map((element, i)=>{
        return(
          <div>
            <div className="hobby-intro">
              <h2>{element.name}</h2>
            </div>
            <div>
              <p>{element.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="hobby">
        {hobbyDisplay}
      </div>
    );
  }
}

export default Hobby;
