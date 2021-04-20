import './Branding.css'
import { Row, Col } from 'antd'
import ReactCardFlip from 'react-card-flip'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import onei from './../../assets/branding/1.png'
import twoi from './../../assets/branding/2.png'
import threei from './../../assets/branding/3.png'
import fouri from './../../assets/branding/4.png'
import fivei from './../../assets/branding/5.png'
import sixi from './../../assets/branding/6.png'

import onef from './../../assets/branding/flipi/1.svg'
import twof from './../../assets/branding/flipi/2.svg'
import threef from './../../assets/branding/flipi/3.svg'
import fourf from './../../assets/branding/flipi/4.svg'
import fivef from './../../assets/branding/flipi/5.svg'
import sixf from './../../assets/branding/flipi/6.svg'


export default function Branding(props){

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);

    return (
        <div style={{backgroundColor:'#e2efe7', paddingBottom:'30px', marginBottom:'-100px'}}> 
        <Row style={{ textAlign:'center', paddingTop:'25vh'}}>
            <Col xs={{span:24}} md={{span:24}} lg={{span:24}}>
            <h4 style={{fontFamily:'Raleway', color:'#796b6d'}}>Project Duration  - 2018-2020</h4>
            <h1 style={{fontFamily:'Palatino-Roman', color:'#796b6d', marginBottom:'80px'}}>
            A compilation of all my creative explorations
            </h1>
            </Col>
        </Row>
        <Row>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={one} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(true);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
            }}
             className="projectCardImg"   align="center"  src={onei}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={onef}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
                
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={two} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(false);
                setTwo(true);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(false);
            }}
             className="projectCardImg"   align="center"  src={twoi}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={twof}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>

                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={three} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(false);
                setTwo(false);
                setThree(true);
                setFour(false);
                setFive(false);
                setSix(false);
            }}
             className="projectCardImg"   align="center"  src={threei}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={threef}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>

                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={four} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(true);
                setFive(false);
                setSix(false);
            }}
             className="projectCardImg"   align="center"  src={fouri}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={fourf}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>

                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={five} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(true);
                setSix(false);
            }}
             className="projectCardImg"   align="center"  src={fivei}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={fivef}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>

                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to="/branding_illustrations">
                <ReactCardFlip isFlipped={six} flipDirection="horizontal">  
            
            <img 
                onMouseEnter={()=>{   
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
                setSix(true);
            }}
             className="projectCardImg"   align="center"  src={sixi}  style={{width:'70%', marginBottom:'30px', backgroundColor:'white'}}/>
            <img 
                className="projectCardImg" align="center" style={{width:'70%', marginBottom:'30px'}} src={sixf}/> 
      </ReactCardFlip>
      <br/><br/>
            </NavLink>
                </Col>
            </Row>
            <NavLink to="/">
            <h4 align="center" style={{fontFamily:'Raleway', color:'#796b6d'}}>
            VIEW ALL PROJECTS
            </h4>
            </NavLink>

        </div>
    )
}