import {Row, Col, Button} from 'antd';
import './Home.css';

import ProjectsContainer from './components/ProjectsContainer'

export default function Home(){
    return (
      <div id="home" align="center"> 
          <div className="home-title" style={{color: '#796b6d', fontFamily:'PalatinoETW01-Roman', fontSize:'50px', marginBottom:'15px'}}>
              Designing through the night.
         </div>
         <div className="home-title" style={{marginTop:'-30px',color: '#796b6d', fontFamily:'PalatinoETW01-Roman', fontSize:'50px', marginBottom:'18px'}}>
              to bring sane ideas to the light.
         </div>
         <div id="home-about" style={{fontFamily:'Raleway', fontSize:'20px'}}>Hello there! I am Archana and I love creating memorable visual design experiences 
         <br className="showInDesktop"/> 
            for products and brands that help people make a difference. </div>
  </div>
    )
}