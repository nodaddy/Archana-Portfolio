import logo from './logo.svg';
import './App.css';
import NavigationBar from './pages/components/NavigationBar'
import Home from './pages/home/Home'
import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import {
  BrowserRouter, Switch, Route, NavLink, Link
} from 'react-router-dom';
import About from './pages/about/About';
import ContentProtection from './pages/content_protection';
import Rapido from './pages/projects/Rapido';
import Innaz from './pages/projects/Innaz';
import Aid from './pages/projects/AidPortfolio';
import Ving from './pages/projects/Ving';
import Selfi from './pages/projects/Selfi';
import ProjectsContainer from './pages/home/components/ProjectsContainer';
import Branding from './pages/projects/Branding';

import resume from "./../src/assets/resume/resume.pdf";

import whiteFooter from './assets/group-28.svg';
import { linkedIn, behance } from './links';

function Footer(props){
  return (
  <footer className="footer" id={props.id} style={{paddingTop:'70px', zIndex:'99999', backgroundImage:`url("${props.image}")`, backgroundRepeat:'no-repeat', backgroundPosition:'left top', backgroundSize:'cover', backgroundPositionX:'3px'}}> 
  {props.nextLink ? <Row>
    <Col span={24} align="center">
      <NavLink to={`${props.nextLink}`} style={{color:'#585757', fontSize:'13px', fontFamily:'Raleway'}}>
      <span style={{marginRight:'6px'}}>NEXT PROJECT</span> <span style={{fontSize:'20px'}}>»</span> 
      </NavLink>
      <br/>
      <NavLink to={`${props.nextLink}`}>
      <h2 style={{color:'#585757', fontFamily:'Palatino'}}>{props.nextLinkText}</h2>
      </NavLink>
    </Col>
  </Row>
  :
  null
  }
  <br/>
  <Row>
  <Col align="center" xs={{span:24}} sm={{span:24}} lg={{span:2}} md={{span:2}}></Col>
  <Col id="footer_left" style={{borderRight:props.section?'2px solid silver':'0px', textAlign:'center'}} xs={{span:24}} sm={{span:24}} lg={{span:10}} md={{span:10}}>
    <span style={{paddingBottom:'35px', fontSize:'18px', color: '#585757'}}>archanadesign.com</span>
  </Col>
  <Col id="footer_right" style={{paddingBottom:'40px', textAlign:'center'}} xs={{span:24}} sm={{span:24}} lg={{span:10}} md={{span:10}}>
    <h2 style={{ color: '#585757'}}>
      <a href={behance}>
          <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              behance
          </span>
      </a>
      <span style={{marginRight:'10px', marginLeft:'10px'}}>.</span> 
      <a target="_linkedIn" href={linkedIn}>
      <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              linkedIn
          </span>
      </a>
      <span style={{marginRight:'10px', marginLeft:'10px'}}>.</span> 
      
      <a target="_blank" href={resume}>
          <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              resume
          </span>
      </a>
      </h2>

    </Col>
  <Col align="center" xs={{span:24}} sm={{span:24}} lg={{span:2}} md={{span:2}}></Col>

</Row>
</footer>
  )
}

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <br/>
        <Switch>

          <Route exact path="/">
            <>
            <NavigationBar currentComponent="work" bgColor="#efe7e2"/> 
            <Home/>
            <ProjectsContainer/>
            <Footer 
            section={false}
            id="footer"
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/046C30E2-CCE0-4DF2-912E-2ADF5608E394.svg"
            />
            </>
          </Route>

          <Route path="/about">
            <>
            <NavigationBar currentComponent="about" bgColor="#f6ede7"/>
            <About/>
            <Footer
            section={false}
            image={whiteFooter}
            id="footer_white"/>
            </>
          </Route>

          <Route path="/rapido">
            <>
            <NavigationBar currentComponent="work" bgColor="#d5e7ea"/>
            <Rapido/>
            <Footer 
            section={true}
            id="footer"
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/046C30E2-CCE0-4DF2-912E-2ADF5608E394.svg"
            nextLink="/selfi"
            nextLinkText="Breast-Self Examination App"
            />
            </>
          </Route>

          <Route path="/innaz">
            <>
            <NavigationBar currentComponent="work" bgColor="#f5e5d9"/>
            <Innaz/>
            <Footer
            section={true}
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/B204A745-3354-4D30-BF37-E0EC403A1E8A.svg"
            id="footer"
            nextLink="/branding_illustrations"
            nextLinkText="Branding + Illustrations"
            />
            </>
          </Route>

          <Route path="/aid">
            <>
            <NavigationBar currentComponent="work" bgColor="#e2e2e2"/>
            <Aid/>
            <Footer
            section={true}
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/478D9978-A5E1-431E-8952-63131AB75896.svg"
            id="footer"
            nextLink="/ving"
            nextLinkText="VING Meeting Room Software"
            />
            </>
          </Route>

          <Route path="/ving">
            <>
            <NavigationBar currentComponent="work" bgColor="#d2e0f2"/>
            <Ving/>
            <Footer
            section={true}
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/50DAB86D-270B-45FC-A44E-FED54CE7E292.svg"
            id="footer"
            nextLink="/innaz"
            nextLinkText="Website Rebranding"
            />
            </>
          </Route>

          <Route path="/selfi">
            <>
            <NavigationBar currentComponent="work" bgColor="#f0edea"/>
              <Selfi/>
            <Footer 
            section={true}
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F913939B-3895-4826-85E1-F9A721C9E117.svg"
            id="footer"
            nextLink="/aid"
            nextLinkText="Website Design for a Design University"
            />
            </>
          </Route>
          <Route path="/branding_illustrations">
            <>
            <NavigationBar currentComponent="work" bgColor="#e2efe7"/>
              <Branding/>
            <Footer 
            section={false}
            id="footer"/>
            </>
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 * No footer in the password field
 * rapido me end me 2 images make them high resolution 
 * highlight font in the paras
 * icon title bold
 * yellow bullets
 * breast diagrams picture high resolution
 * project duration font increase h2->h3 for all projets
 * aid background image no-reapeat
 * same fonts in mobile and desktop
 *
*/
