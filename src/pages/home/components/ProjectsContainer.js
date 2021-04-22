import './ProjectsContainer.css';
import {NavLink} from 'react-router-dom';
import {Row, Col, Card} from 'antd';
import group29 from './../../../assets/group-29.svg';
import group19 from './../../../assets/group-19.svg';
import group30 from './../../../assets/group-30.svg';
import group31 from './../../../assets/group-31.png';
import group32 from './../../../assets/group-32.jpg';
import group33 from './../../../assets/group-33.svg';
import rapidoBack from './../../../assets/rapidoBack.svg';
import selfiBack from './../../../assets/selfiBack.svg';
import aidBack from './../../../assets/aidBack.svg';
import vingBack from './../../../assets/vingBack.svg';
import innazBack from './../../../assets/innazBack.svg';
import brandingBack from './../../../assets/brandingBack.svg';
import { useState } from 'react';

import ReactCardFlip from 'react-card-flip'

const projects = [
    {
        id:1,
        title: 'Rapido’s Booking Experience',
        image: group19,
        flip: rapidoBack,
        isPrivate: false,
        route:"/rapido"
    },
    {
        id:2,
        title: 'Breast- Self Examination App',
        image: group29,
        flip: selfiBack,
        isPrivate: true,
        route:"/selfi"
    },
    {
        id:3,
        title: 'Website Redesign ',
        image: group30,
        flip: aidBack,
        isPrivate: false,
        route:"/aid"
    },
    {
        id:4,
        title: 'Meeting Room Platform',
        image: group31,
        flip: vingBack,
        isPrivate: true,
        route:"/ving"
    },
    {
        id:5,
        title: 'Event Website',
        image: group32,
        flip: innazBack,
        isPrivate: false,
        route:"/innaz"
    },
    {
        id:6,
        title: 'Branding + Illustrations',
        image: group33,
        flip: brandingBack,
        isPrivate: null,
        route:"/branding_illustrations"
    },
]


export default function ProjectsContainer(){

    let inImg = false;
 
    const [zero, setZero] = useState(false);
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);

 
    return (
        
        <div id="projectsContainer">
            <Row>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[0].route}>
                <ReactCardFlip isFlipped={zero} flipDirection="horizontal">  
            
            <img
             onMouseEnter={()=>{  
                setZero(true) ;
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
            }}
             className="projectCardImg"   align="center"  src={projects[0].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
              
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[0].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[1].route}>
                <ReactCardFlip isFlipped={one} flipDirection="horizontal">  
            <img
             onMouseEnter={()=>{
                 setTimeout(()=>{
                    setZero(false);
                    setOne(true);
                    setTwo(false);
                    setThree(false);
                    setFour(false);
                    setFive(false);
                 }, 1000)
            }}
             className="projectCardImg"   align="center"  src={projects[1].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
              
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[1].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>

                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[2].route}>
                <ReactCardFlip isFlipped={two} flipDirection="horizontal">  
            <img
             onMouseEnter={()=>{  
                setZero(false) ;
                setOne(false);
                setTwo(true);
                setThree(false);
                setFour(false);
                setFive(false);
            }}
             className="projectCardImg"   align="center"  src={projects[2].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
             
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[2].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
                
            <Col xs={{span:24}} lg={{span:12}} align="center">
            <NavLink to={projects[3].route}>
                <ReactCardFlip isFlipped={three} flipDirection="horizontal">  
            <img
             onMouseEnter={()=>{  
                setZero(false) ;
                setOne(false);
                setTwo(false);
                setThree(true);
                setFour(false);
                setFive(false);
            }}
             className="projectCardImg"   align="center"  src={projects[3].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
             
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[3].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
            
            <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[4].route}>
                <ReactCardFlip isFlipped={four} flipDirection="horizontal">  
            <img
             onMouseEnter={()=>{  
                setZero(false) ;
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(true);
                setFive(false);
            }}
             className="projectCardImg"   align="center"  src={projects[4].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
              
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[4].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
            
            <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[5].route}>
                <ReactCardFlip  isFlipped={five} flipDirection="horizontal">  
            <img
             onMouseEnter={()=>{  
                setZero(false) ;
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(true);
            }}
             className="projectCardImg"   align="center"  src={projects[5].image}  style={{width:'65%', marginBottom:'30px'}}/>
            <img
            
             className="projectCardImg" align="center" style={{width:'65%', marginBottom:'30px'}} src={projects[5].flip}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
            </Row>
             
            
              
        </div>
    )
} 