import React from 'react';

import {Row, Col} from 'antd';
import './About.css';
import {NavLink} from 'react-router-dom';
import pp from './../../assets/pp/pp.jpg';
import { behance, linkedIn } from '../../links';
import resume from "./../../assets/resume/resume.pdf";
import { useEffect } from 'react';

export default function About(props){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return(
        <Row id="about" style={{paddingBottom:'100px', marginBottom:'-30px'}}>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:8}} xs={{span:24}} align="center"> 
                <img id="profilePicture" src={pp}
                style={{width:'100%', marginBottom:'10vh'}}
                /> 
            </Col>
            <Col lg={{span:1}} xs={{span:24}}></Col>
            <Col lg={{span:11}} xs={{span:24}} style={{paddingLeft:'30px', paddingRight:'30px'}} align="center"> 
            <div>
            <img className="showInDesktop" align="left" style={{width:'80%', display:'block'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/140DE156-B4F2-4FD7-A541-D69545AB2AAC.png"/>
            <img className="showInMobile" align="center" style={{display:'none', width:'80%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/5492C75D-AFD4-40F2-9DDD-C8191D37AE3C.png"/>
            <br/> 
            </div>
            <br/>
            <br/>
            <p align="left" style={{fontFamily:'Raleway', fontSize: '18px', color:'#796b6d'}}>
            Finally we meet :p thanks for stopping by. I’m a Visual &amp; Experience Designer who enjoys creating memorable online experiences. I strive to create simple, original, and impactful user experiences for brands and services. I take on projects of all sizes; from web design, to branding and product design. I’ve led the visual design and creative direction of products, teams, and design systems at <b>Boston Consulting Group, Bengaluru</b>. Currently I am working as a freelance designer based in Guwahati, Assam.
            <br/>
            <br/>
            I graduated from <b>UnitedWorld Institute of Design, Ahmedabad</b> with a <span style={{color:'#c96b74'}}><b>B.Des in Visual Communication and Graphic Design</b></span>. I loved the human-centered design approach and processes I learned in school and applied them to my thesis project with <b>Please See, Mumbai</b>. I also got a chance to pick up some serious Research skills and work on System Design for Asian Paints during my long summer internship at <b>The Designship, Ahmedabad</b>.
            <br/>
            <br/>
            I'm always trying to grow and learn something new. I lose track of time when I'm journaling and illustrating, adventuring out with my friends, curled up in my bed discovering new movies, or eating food in new places I explore.
            <br/>
            <br/>
            Currently, I'm looking for new opportunities to broaden my creative horizon and get to work on fun projects. Please don't hesitate to reach out— I'm happy to chat about work or play!
            <br/>
            <br/>
            <h4 style={{color:'#c96b74'}}>CONTACT</h4>
            archana96das@gmail.com
            <br/>
            <br/>
            <h4 style={{color:'#c96b74'}}>LINKS</h4>
            <a style={{color:'#796b6d'}} href={resume}>Resume</a><br/>
                <a style={{color:'#796b6d'}}  href={linkedIn}>LinkedIn</a><br/>
                <a style={{color:'#796b6d'}}  href={behance}>Behance</a> 
            </p>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
        </Row>
    )
}
