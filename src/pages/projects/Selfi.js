import './Selfi.css'
import {useEffect} from 'react'; 
import {Row, Col} from 'antd'; 

const selfiImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D8473546-2CE0-4561-B5C7-EE6F90ACA4FA.svg";
const selfiLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C3D8B4C-0F52-4937-90C7-E2AE414818D9.png";

export default function Selfi(props){

    useEffect(()=>{
        //window.scrollTo(0, 0);
    }, [])

    return (
        <div align="center" id="selfi">
            <h4 style={{fontFamily:'Raleway', color:'#796b6d'}}>Case Study  -  2019</h4>
            <h1 className="showInDesktop" style={{fontFamily:'Palatino-Roman', color:'#796b6d', marginBottom:'80px', width:'50%'}}>
                The Development of a Mobile Health App 
                for Breast Cancer Self-Management 
            </h1>
            <h1 className="showInMobile" style={{display:'none', fontFamily:'Palatino-Roman', color:'#796b6d', marginBottom:'80px', width:'50%'}}>
                The Development of a Mobile Health App 
                for Breast Cancer Self-Management 
            </h1>
            <Row>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <img style={{width:'65%'}} src={selfiImg}></img>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row className="selfiM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:7}} xs={{span:24}}>
                <div className="selfiH">
                    Making Breast Health more accessible and empowering 
                    people around the world with breast health care and support.
                    </div>
                    <br/>
                    <h4 style={{fontFamily:'Raleway', color:'#ff6b63'}}><b>AREA</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                        Research, Design (UX/UI, Prototyping), 
                        Service Design, Illustration
                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#ff6b63'}}><b>MY ROLE</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}> 
                    Lead the UI design through end to end process: discovery and ideation, user research, illustrations
                    and prototype 
                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#ff6b63'}}><b>TEAM</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                    Kirupali Pujara, Archana Das, Karthik Nathan Sowbhagyanathan, Salonee Gupta
                    <br/>
                    <br/>
                    </p>
                </Col>
                <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:11}} xs={{span:24}}>
                    <div className="selfiHp">
                    <b>Selfi</b> is the world’s first telehealth platform designed 
                    to enable women to monitor their own breast health conveniently, from the privacy of their homes. Selfi 
                    enables women to obtain consultations with appropriate medical specialists, facilitating access to further diagnostics and specialized treatments and by no 
                    means a replacement to a traditional Mammogram.
                    </div>
                    <br/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/CFA3DDDD-C7DA-4982-A85D-7CF6B32F2EFF.png"/>
                    <br/>
                    <div className="selfiHp">
                    A functional prototype of the Selfi Scanner device developed by iBreastExam’s sensor technology platform.
                    </div>
                </Col>
                <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
            </Row>
        </div>
    )
}