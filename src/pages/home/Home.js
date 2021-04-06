import {Row, Col, Button} from 'antd';
import './Home.css';

import ProjectsContainer from './components/ProjectsContainer'

export default function Home(){
    return (
      <div id="home" align="center">
          <h1 style={{color: '#796b6d', fontFamily:'Palatino-Roman'}}>
              Designing through the night
                <br/>
              to bring sane ideas to the light.
         </h1>
         <h3 id="homeAbout" style={{fontFamily:'Raleway'}}>Hello there! I am Archana and I love creating memorable visual design experiences <br/> 
            for products and brands that help people make a difference. </h3>
        <div id="projects">
            <ProjectsContainer/>
        </div>
      </div>
    )
}