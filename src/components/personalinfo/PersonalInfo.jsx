import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    let personalinfo = this.props.data;
    let socialMedia = [];
    if(personalinfo){
      if(personalinfo.shortbio === ""){
        personalinfo.shortbio = "missing";
      }
      var counter = 0;
      for(var keys in personalinfo.socialmedia){
        socialMedia.push(<a key={counter} href={personalinfo.socialmedia[keys]}>{keys}</a>);
        counter++;
      }      
    }
    return (
      <div className="personalinfo">
        <div className="personalinfo-intro"><p>Hello my className is oscar moresl, i'm a front end developer with a background
          in gamedesign/developmenet. Welcome to my resume here you will find</p>
        </div>
        <div>
          {socialMedia}
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
