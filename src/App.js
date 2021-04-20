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

import whiteFooter from './assets/group-28.svg';

function Footer(props){
  return (
  <footer id={props.id} style={{ zIndex:'99999', backgroundImage:`url("${props.image}")`, backgroundRepeat:'no-repeat', backgroundPosition:'left top', backgroundSize:'cover'}}> 
  <Row>
  <Col align="center" xs={{span:24}} sm={{span:24}} lg={{span:2}} md={{span:2}}></Col>
  <Col id="footer_left" style={{textAlign:'left'}} xs={{span:24}} sm={{span:24}} lg={{span:10}} md={{span:10}}>
    <span style={{ fontSize:'18px', color: '#585757'}}>archanadesign.com</span>
  </Col>
  <Col id="footer_right" style={{textAlign:'right'}} xs={{span:24}} sm={{span:24}} lg={{span:10}} md={{span:10}}>
    <h2 style={{ color: '#585757'}}>
      <NavLink to="/">
          <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              behance
          </span>
      </NavLink>
      <span style={{marginRight:'10px', marginLeft:'10px'}}>.</span> 
      <a target="_linkedIn" href="https://www.linkedin.com">
      <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              linkedIn
          </span>
      </a>
      <span style={{marginRight:'10px', marginLeft:'10px'}}>.</span> 
      
      <NavLink to="/">
          <span style={{fontSize:'18px', color:'#796b6d', fontWeight:'normal'}}>
              resume
          </span>
      </NavLink>
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
            image={whiteFooter}
            id="footer_white"/>
            </>
          </Route>

          <Route path="/rapido">
            <>
            <NavigationBar currentComponent="work" bgColor="#d5e7ea"/>
            <Rapido/>
            <Footer 
            id="footer"
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/046C30E2-CCE0-4DF2-912E-2ADF5608E394.svg"
            />
            </>
          </Route>

          <Route path="/innaz">
            <>
            <NavigationBar currentComponent="work" bgColor="#f5e5d9"/>
            <Innaz/>
            <Footer
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/B204A745-3354-4D30-BF37-E0EC403A1E8A.svg"
            id="footer"/>
            </>
          </Route>

          <Route path="/aid">
            <>
            <NavigationBar currentComponent="work" bgColor="#e2e2e2"/>
            <Aid/>
            <Footer
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/478D9978-A5E1-431E-8952-63131AB75896.svg"
            id="footer"/>
            </>
          </Route>

          <Route path="/ving">
            <>
            <NavigationBar currentComponent="work" bgColor="#d2e0f2"/>
            <Ving/>
            <Footer
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/50DAB86D-270B-45FC-A44E-FED54CE7E292.svg"
            id="footer"/>
            </>
          </Route>

          <Route path="/selfi">
            <>
            <NavigationBar currentComponent="work" bgColor="#f0edea"/>
              <Selfi/>
            <Footer 
            image="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F913939B-3895-4826-85E1-F9A721C9E117.svg"
            id="footer"/>
            </>
          </Route>

          <Route path="/branding_illustrations">
            <>
            <NavigationBar currentComponent="work" bgColor="#e2efe7"/>
              <Branding/>
            <Footer id="footer"/>
            </>
          </Route>

        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
