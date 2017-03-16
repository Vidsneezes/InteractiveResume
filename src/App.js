import React, { Component } from 'react';
import Info from './components/info/Info.jsx'
import PersonalInfo from './components/personalinfo/PersonalInfo.jsx';
import WorkHistory from './components/workhistory/WorkHistory.jsx';
import Project from './components/project/Project.jsx';
import Dicon from './images/64x64icon.png';
import Education from './components/education/Education.jsx';
import Hobby from './components/hobby/Hobby.jsx';
import Footer from './components/footer/Footer.jsx';
import Page from './components/page/Page.jsx';
import './App.css';
import Resume from './resume.json';

class App extends Component {
  render() {
    let info = null;
    if(Resume.info){
      info = (
        <Info image={Dicon} fullname={Resume.info.fullname} fulladdress={Resume.info.fulladdress} />
      );
    }else{
        <Info image={Dicon} fullname="missing" fulladdress="missing" />
    }
    return (
      <div className="App">
        <Page title="Info">
          {info}
        </Page>
        <Page title="Pesonal Info">
          <PersonalInfo />
        </Page>
        <Page title="Work History">
          <WorkHistory />
        </Page>
        <Page title="Projects">
          <Project image={Dicon} alt="default image"/>
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
