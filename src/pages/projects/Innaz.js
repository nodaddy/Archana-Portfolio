import React from 'react';

import {useEffect} from 'react';
import './Innaz.css';
import {Row, Col} from 'antd'; 

import gif from './../../animation_screens/new.gif'
import innaz1 from './../../assets/innaz/innaz1.png'
import innaz2 from './../../assets/innaz/innaz2.jpg'
import innaz3 from './../../assets/innaz/innaz3.jpg'
import innaz4 from './../../assets/innaz/innaz4.png'
import innaz5 from './../../assets/innaz/innaz5.png'
import innaz6 from './../../assets/innaz/innaz6.png'
import innaz7 from './../../assets/innaz/innaz7.png'
import innaz8 from './../../assets/innaz/innaz8.png'
import innaz9 from './../../assets/innaz/innaz9.png'

//const innazImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/6EBCF7C7-9F05-43F5-A8C3-CEAA95447141.png";
//const InnazLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C3D8B4C-0F52-4937-90C7-E2AE414818D9.png";

export default function Innaz(){

    useEffect(()=>{
       window.scrollTo(0, 0);
    }, [])

    return (
        <div align="center" id="innaz">
            <h3 style={{fontFamily:'Raleway', color:'#796b6d'}}>Project Duration  - <span style={{fontFamily:'Prompt'}}><b>Jan 2018- May 2018</b></span>
</h3>
            <div id="innazMainH" style={{fontFamily:'serif', color:'#796b6d', marginBottom:'30px', fontSize:'36px'}}>
            Rebranding for an Event Website
            </div>
            <Row>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}} style={{backgroundColor:'white'}}>
                    <img style={{width:'100%'}} src={innaz1}></img>
                    <img style={{width:'100%'}} src={innaz2}/>
                    <img style={{width:'100%'}} src={innaz3}/>
                    <img style={{width:'100%'}} src={innaz4}/>
                    <img style={{width:'100%'}} src={innaz5}/>
                    <img style={{width:'100%'}} src={innaz6}/>
                    <img style={{width:'100%'}} src={innaz7}/>
                    <img style={{width:'100%'}} src={innaz8}/>
                    <img style={{width:'100%'}} src={innaz9}/>
                    <img style={{width:'100%'}} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/16d0e376554909.5c83b16b69bd0.jpg"/>
                    
                    <img style={{width:'80%'}} src={gif}/>
                    <br/>
                    <br/>
                    {/* <h1 align="left" style={{marginLeft:'30px',fontFamily:'Railway', color:'black', padding:'0px'}}><b>Final Prototype</b></h1>
                    <p align="left" style={{marginLeft:'30px',color:'#f5e5d9', padding:'10px', borderLeft:'3px solid #f5e5d9', fontFamily:'Railway'}}><b>
                        We created a solution that aims to convey the expertise and <br/>
                        personality of the company thus creating a clean theme that<br/>
                        shows confidence
                        </b></p> */}
                    <h3 style={{overflowX:'hidden',fontFamily:'Raleway',  marginTop:'74px', marginBottom:'55px'}}>Click on this link to view the entire project 
                    <a style={{color:'#cf9576'}} target="_behance_innaz" href="https://www.behance.net/gallery/76554909/Weddings-By-Innaz-Event-Website">https://www.behance.net/gallery/76554909/Weddings-By-Innaz-Event-Website</a></h3>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
        </div>
    )
}