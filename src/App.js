import React, { Component } from 'react';
import Info from './components/info/Info.jsx'
import PersonalInfo from './components/personalinfo/PersonalInfo.jsx';
import WorkHistory from './components/workhistory/WorkHistory.jsx';
import Project from './components/project/Project.jsx';
import Education from './components/education/Education.jsx';
import Hobby from './components/hobby/Hobby.jsx';
import Footer from './components/footer/Footer.jsx';
import Page from './components/page/Page.jsx';
import './App.css';
import Resume from './resume.json';
import Images from './Images.js';

class App extends Component {
  render() {
    let info = null;
    let images = Images();
    if(Resume.info){
      info = (
        <Info image={images["default"]} data={Resume.info} />
      );
    }

    let personalinfo = null;
    if(Resume.personalinfo){
      personalinfo = (
         <PersonalInfo data={Resume.personalinfo} />
      );
    }
    
    let workhistory = null;
    if(Resume.workhistory){
      workhistory = (
          <WorkHistory workHistory={Resume.workhistory} />
      );
    }
    return (
      <div className="App">
        <Page title="Info">
          {info}
        </Page>
        <Page title="Pesonal Info">
          {personalinfo}
        </Page>
        <Page title="Work History">
          {workhistory}
        </Page>
        <Page title="Projects">
          <Project image={images["default"]} alt="default image"/>
        </Page>
        <Page title="Education">
          <Education />
        </Page>
        <Page title="Hobbies">
          <Hobby />
        </Page>
        <Page>
          <Footer />
        </Page>
      </div>
    );
  }
}

export default App;
