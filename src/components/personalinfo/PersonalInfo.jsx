import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    let personalinfo = this.props.data;
    let socialMedia = null;
    if(personalinfo){
      if(personalinfo.shortbio === ""){
        personalinfo.shortbio = "missing";
      }
      for(var keys in personalinfo.socialmedia){
        console.log(keys);
      }      
    }

    return (
      <div className="personalinfo">
        <div className="personalinfo-intro"><p>Hello my className is oscar moresl, i'm a front end developer with a background
          in gamedesign/developmenet. Welcome to my resume here you will find</p>
        </div>
        <div>
          <a href="#personalinfo">click me </a>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
