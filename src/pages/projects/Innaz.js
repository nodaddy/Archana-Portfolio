import {useEffect} from 'react';
import './Innaz.css';
import {Row, Col} from 'antd'; 

import gif from './../../animation_screens/new.gif'

const innazImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/6EBCF7C7-9F05-43F5-A8C3-CEAA95447141.png";
//const InnazLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C3D8B4C-0F52-4937-90C7-E2AE414818D9.png";

export default function Innaz(){

    useEffect(()=>{
       window.scrollTo(0, 0);
    }, [])

    return (
        <div align="center" id="innaz">
            <h4 style={{fontFamily:'Raleway', color:'#796b6d'}}>Project Duration  - Jan 2018- May 2018
</h4>
            <h1 style={{fontFamily:'Palatino-Roman', color:'#796b6d', marginBottom:'80px'}}>
            Rebranding for an Event Website
            </h1>
            <Row>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={innazImg}></img>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F195D33E-0788-4D55-9E24-71510AC314FD.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/76CEA0AB-7D79-4924-96CA-96B31272E10C.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/8D8D909D-4615-40F8-A9D6-270947A51D51.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/97715AA4-B295-4590-B658-EB76DDE5B409.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/58207E44-8622-45BD-AE82-8083948A89A8.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/40E59F56-2A35-40BF-B7CA-D24DA17F4966.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/694C415B-4683-4D42-A21D-67FCDE25557C.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/FC5AE80C-F155-43C2-A2B5-90C8917A5333.png"/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/FC5AE80C-F155-43C2-A2B5-90C8917A5333.png"/>
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
                    <h3 style={{overflowX:'hidden',fontFamily:'Raleway'}}>Click on this link to view the entire project <a target="_behance_innaz" href="https://www.behance.net/gallery/76554909/Weddings-By-Innaz-Event-Website">https://www.behance.net/gallery/76554909/Weddings-By-Innaz-Event-Website</a></h3>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
        </div>
    )
}