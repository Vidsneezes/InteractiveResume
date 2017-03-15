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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page title="Info">
          <Info />
        </Page>
        <Page>
          <PersonalInfo />
        </Page>
        <Page>
          <WorkHistory />
        </Page>
        <Page>
          <Project image={Dicon} alt="default image"/>
        </Page>
        <Page>
          <Education />
        </Page>
        <Page>
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
