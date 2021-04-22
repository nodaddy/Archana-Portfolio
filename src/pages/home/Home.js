import {Row, Col, Button} from 'antd';
import './Home.css';

import ProjectsContainer from './components/ProjectsContainer'

export default function Home(){
    return (
      <div id="home" align="center"> 
          <div style={{color: '#796b6d', fontFamily:'Palatino-Roman', fontSize:'50px', marginBottom:'18px'}}>
              Designing through the night
                <br/>
              to bring sane ideas to the light.
         </div>
         <div id="homeAbout" style={{fontFamily:'Raleway', fontSize:'20px'}}>Hello there! I am Archana and I love creating memorable visual design experiences <br/> 
            for products and brands that help people make a difference. </div>
         
       
  </div>
    )
}