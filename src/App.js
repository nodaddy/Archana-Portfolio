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

function Footer(props){
  return (
    <footer id={props.id}> 
    <Row>
  <Col align="center" xs={{span:24}} lg={{span:2}}></Col>
  <Col id="footer_left" style={{textAlign:'left'}} xs={{span:24}} lg={{span:10}}>
    <span style={{ fontSize:'18px' ,color: '#585757', }}>archanadesign.com</span>
  </Col>
  <Col id="footer_right" style={{textAlign:'right'}} xs={{span:24}} lg={{span:10}}>
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
  <Col align="center" xs={{span:24}} lg={{span:2}}></Col>

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
            <Footer id="footer"/>
            </>
          </Route>

          <Route path="/about">
            <>
            <NavigationBar currentComponent="about" bgColor="#f6ede7"/>
            <About/>
            <Footer id="footer_white"/>
            </>
          </Route>

          <Route path="/rapido">
            <>
            <NavigationBar currentComponent="work" bgColor="#d5e7ea"/>
            <Rapido/>
            <Footer id="footer"/>
            </>
          </Route>

          <Route path="/innaz">
            <>
            <NavigationBar currentComponent="work" bgColor="#f5e5d9"/>
            <Innaz/>
            <Footer id="footer"/>
            </>
          </Route>

          <Route path="/aid">
            <>
            <NavigationBar currentComponent="work" bgColor="#e2e2e2"/>
            <Aid/>
            <Footer id="footer"/>
            </>
          </Route>

          <Route path="/ving">
            <>
            <NavigationBar currentComponent="work" bgColor="#d2e0f2"/>
            <Ving/>
            <Footer id="footer"/>
            </>
          </Route>

          <Route path="/selfi">
            <>
            <NavigationBar currentComponent="work" bgColor="#f0edea"/>
              <Selfi/>
            <Footer id="footer"/>
            </>
          </Route>


        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
