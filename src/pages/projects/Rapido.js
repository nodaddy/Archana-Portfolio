import {useEffect} from 'react';
import './Rapido.css';
import {Row, Col} from 'antd'; 
import rapido1 from './../../assets/rapido/rapido1.png'
import rapido2 from './../../assets/rapido/rapido2.png'
import rapido3 from './../../assets/rapido/rapido3.png'
import rapido4 from './../../assets/rapido/rapido4.png'
import rapido5 from './../../assets/rapido/rapido5.png'

import pUser from './../../animation_screens/pUser.mp4';
import pu2 from './../../assets/rapido/pu2.png';
import pu3 from './../../assets/rapido/pu3.png'; 

import sp1 from './../../assets/rapido/sp1.png'; 
import sp2 from './../../assets/rapido/sp2.png'; 
import sp3 from './../../assets/rapido/sp3.png';


import ts1 from './../../assets/rapido/ts1.png'; 
import ts2 from './../../assets/rapido/ts2.png'; 
import ts3 from './../../assets/rapido/ts3.png';

import cb1 from './../../assets/rapido/cb1.png';
import cb2 from './../../assets/rapido/cb2.png';


const rapidoImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/859CF4DD-8B17-416A-8296-3FB76E60035A.png";
const rapidoLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C3D8B4C-0F52-4937-90C7-E2AE414818D9.png";

export default function Rapido(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div align="center" id="rapido">
            <h4 style={{fontFamily:'Raleway', color:'#796b6d'}}>Case Study  -  2019</h4>
            <div id="rapidoMainH" style={{fontFamily:'Palatino-Roman', fontSize:'36px', color:'#796b6d', marginBottom:'80px'}}>
                Perfecting the booking experience
            </div>
            <Row style={{marginBottom:'110px'}}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={rapidoImg}></img>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row> 
            
            <Row>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:7}} xs={{span:24}}>
                    <img id="rapido-logo" style={{width:'169px', marginBottom:'34px'}} src={rapidoLogo}/>
                    <br/>
                    <h4 style={{fontFamily:'Raleway', color:'#f6d70f'}}><b>AREA</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                        Research, Design (UX/UI, Prototyping), 
                        Voice Integration, Interaction
                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#f6d70f'}}><b>MY ROLE</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                        Responsible for Redesign, Discovery and Ideation, User Research, Interaction Design 
                        and Prototype 
                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#f6d70f'}}><b>TEAM</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                    Guru Prasad, Archana Das, Kratika Jain 
                    <br/>
                    <br/>
                    </p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:11}} xs={{span:24}}>
                    <div className="rapidoH">
                    Re-designing a better booking experience for India's Largest Bike Taxi Aggregator
                    </div>
                    <br/>
                    <br/>
                    <div className="rapidoHp">
                    Rapido is an Indian online bike taxi aggregator and logistics service provider based in India. Founded in 2015, the company operates in over 75 cities across the country. The first-of-its-kind bike taxi service provider took Bangalore by storm when it entered the market.
                    <br/>
                    <br/>
                    I was a part of an ambitious project at Redd where I got the opportunity to redesign the Rapido’s booking experience for the fastest growing startup in India. An experimental design for the performance of a voice-based interface that enables users to book rides easily. The project was executed in conjunction with our partners at Slang Labs. 
                    </div>
                </Col>
                <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img style={{width:'100%', marginTop:'80px', marginBottom:'60px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/AAD3E514-6FA2-4305-94A5-B2CD8BC042D6.svg"/>
                </Col>
            </Row> 
            <Row>
                <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:20}} xs={{span:24}}>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3B5034A2-6191-4151-B4DD-112DBF0CCF50.svg"></img>
                    <br/>
                    <br/>
                    <h2 className="rapidoH">What we wanted to achieve</h2>
                    <p className="rapidoHp">
                    Rapido's product design team wanted to experiment with Voice Integration for their Booking focusing mainly on 2 or 3 tier cities. Our vision was to design for the next billion users who might struggle to read and use interfaces.
                    <br/>
                    <br/>
                    Our high-level goals were to:
                    <ul>
                        <li> Follow APK and functionalities set by Slang Labs </li>

                        <li> Design a smoother UI for the Next billion users </li>

                        <li> Have slow and steady onboarding for users </li>

                        <li> Help the users adapt to Voice Integration </li>
                    
                    </ul> 
                    </p>
                </Col>
                <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row style={{backgroundColor:'#f6fbff', paddingTop:'30px'}}>
                <Col span={2}></Col>
                <Col align="center" lg={{span:20}} xs={{span:24}}>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/A1671438-FEF7-40FB-842E-9FFB9DBD285D.svg"></img>
                    <br/>
                    <br/>
                    <h2 className="rapidoH">What we learned</h2> 
                    <p align="left" className="rapidoHp">
                    Even though we had an idea of the app or drivers riding on the road. We weren’t well versed with the interface of the app. The things we design are bound to fail if we don't understand how it works in the first place. Since it was completely a new area for both the product and the interface, we requested some of our colleagues to try the app and tell us about their experience using the app and figure out the problem areas for booking. We personally tried it from different environments home, work, even in the middle of the main road.
                    </p>
                    <br/>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/AB3D6DBD-C793-4723-B8B4-35D34F821652.png"/>
                    <br/>
                    <br/>
                    <h2 style={{ 
                        fontFamily: 'Palatino-Roman',   
                        textAlign: 'center',
                        color: '#585757'
                    }}>
                        “Curiosity revealed an opportunity to perfect the booking experience <br/>
                        for everyone, everywhere”
                    </h2>
                </Col>
                <Col span={2}></Col>
            </Row> 
            <Row style={{backgroundColor:'#f6fbff', paddingTop:'25px'}}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:20}} xs={{span:24}}>
                    <h3 style={{
                        color:'#15204e',
                        fontFamily: 'Raleway'
                    }}>
                        <b>PROBLEM AREAS</b>
                    </h3>
                    <br/>
                    <h3 style={{ 
                        fontFamily: 'Raleway'
                    }}>
                        <b>Traffic</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>
                    -According to few interviewee’s, Bengaluru being a pretty jam packed city due to the construction work going on throughout the year, people looked for faster ways to avoid the traffic and reach their workplace and would prefer using a Two- wheeler to get them through the traffic.
                    </p>
                    <br/>
                    <h3 style={{ 
                        fontFamily: 'Raleway'
                    }}>
                        <b>Running Late</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>
                    -We found that most of the women in the mornings, while juggling hundred things at a time and getting ready for office, found the idea of checking the arrival time of their rider in between their chores to be a little bothersome. They agreed that Voice integrated notifications about the riders arrival time will ease their morning chaos.  
                    </p>
                    <br/>
                    <h3 style={{ 
                        fontFamily: 'Raleway'
                    }}>
                        <b>Driver</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>
                    - The drivers faced problems while using the app , especially while using a mobile phone for directions when kept in their pocket, and most of them used headsets which made the entire experience for the Captain stressful.
                    <br/>
                    - Sometimes the Drivers had to make requests to the customers to get help with the directions.
                    <br/>
                    - The Drivers requested for Voice Commands to help with travel directions for a more smoother driving experience.
                    
                    </p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:20}} xs={{span:24}}>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C8103D3-2B4F-49AF-AEC7-B212C0861A46.svg"></img>
                    <br/>
                    <br/>
                    <h2 className="rapidoH">Our Philosophy</h2>
                    <p className="rapidoHp">
                    Based on our research and insights, we drew a plan where I took up the task of solving customer-facing issues, and my team-mate Guru took the task of solving the captain's problem using VUI and present it as part of the initial meeting. We started off by setting the principles right for the project.
                    </p>
                    <h2 align="center" style={{color:'#585757', fontFamily:'Palatino-Roman'}}>“How do we create a smoother booking flow for Riders and Drivers ?”</h2>
                    <br/> 
                    <h3 style={{ 
                        fontFamily: 'Raleway',
                        color:'#15204e'
                    }}>
                        <b>The best interface is no interface</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>•	To achieve our goal, the rider needs to spend less time looking at the app interface and focus on other tasks at hand.
                    </p>
                    <br/> 
                    <h3 style={{ 
                        fontFamily: 'Raleway',
                        color:'#15204e'
                    }}>
                        <b>Commands are screen-specific</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>•	We need to take baby steps with the actions the rider would make which would be more specific to what the users see on their screen. Example: You cannot make a command like “Add Payment Method" while you’re on the Home screen.
                    </p>
                    <br/> 
                    <h3 style={{ 
                        fontFamily: 'Raleway',
                        color:'#15204e'
                    }}>
                        <b>Empathise with driver’s problem</b>
                    </h3>
                    <p style={{
                        color: '#585757',
                        fontFamily: 'Raleway',
                        fontSize:'17px'
                    }}>
                        •	Understand the scenarios captains will face while riding a bike and prioritise them throughout the app. 
                    </p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row style={{backgroundColor:'#f6fbff', padding:'7px', paddingBottom:'40px'}}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/00C35001-8200-4CB9-9165-FEAC7D67C3CF.svg"></img>
                    <br/>
                    <br/>
                    <h2 className="rapidoH">Our Approach</h2>
                    <p align="left" className="rapidoHp">
                        Drawing from our three important principles, we generated ideas for solutions. We started working on Riders Flow and Drivers Flow by integrating Voice commands for the Booking experience, which helped us in designing the other important flows in-between.
                    </p>
                    <br/>
                    <br/>
                    <div align="left" style={{color:'#15204e', fontFamily:'Raleway'}}><b>Journey 1</b></div>
                    <br/>
                    <h2 align="left" style={{
                        fontFamily:'Raleway',
                        color: '#585757'
                    }}><b>Booking a Ride</b></h2>
                    <br/>
                    <img style={{width:'100%'}} src={rapido1}>
                    </img>
                    <br/>
                    <br/>
                    <h2 style={{fontFamily:' Nanum Pen Script', color:'#585757'}}>Booking Flow for First time users and Returning Users</h2>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Trigger Screens For Riders</b>
                    </h2>
                    <Row>
                        <Col align="center" lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={ts1}/>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={ts2}/>
                        </Col>
                        <Col align="center" lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={ts3}/>
                        </Col>
                        <Col lg={{span:24}} xs={{span:12}}>
                            <br/>
                        <h3 align="left" style={{ fontFamily: 'Nanum Pen Script' ,color: '#585757'}}>
                            For first time users, there will be a Rapido Scooter pop up for Voice Assistance which will help the User in guiding/responding to commands that a first time Rider would typically make during Onboarding.  
                        </h3>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Confirming your booking</b>
                    </h2>
                    <Row>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={cb1}/>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={cb2}/>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                           
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Saving your Preferences</b>
                    </h2>
                    <Row>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={sp1}/>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={sp2}/>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={sp3}/>
                        </Col>
                        <Col lg={{span:24}} xs={{span:12}}>
                            <br/>
                        <h3 align="left" style={{ fontFamily: 'Nanum Pen Script' ,color: '#585757'}}>
                            First time users can save their address and set their preferences according to the suggested tags
                            <br/>
                            The Pro/Returning users can make commands to request their rides.
                        </h3>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Error States</b>
                    </h2>
                    <Row >
                        <Col lg={{span:16}} xs={{span:24}}>
                            <img style={{width:'80%'}} src={rapido2}></img>
                        </Col>
                        <Col lg={{span:8}} xs={{span:24}}>
                            <img id="bnwimg" style={{marginLeft:'-170px', marginTop:'100px', width:'100%'}} src={rapido3}/>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>System Errors</b>
                    </h2>
                    <Row >
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'85%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/720F518B-EF3D-438F-9FAB-D447CF025E44.png"></img>
                        </Col>
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'83%', marginTop:'19px'}}  src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/B4FA74E6-1B20-4AC0-B747-F64ECDC9F05D.png"/>
                        </Col>
                    </Row>
                    <h3 align="center" style={{ fontFamily: 'Nanum Pen Script' ,color: '#585757'}}>
                        Error State for Internet Connectivity or Server Issues
                    </h3>
                    <br/>
                    <Row >
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'85%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2A928C30-F094-459C-A0C1-C5D42BD36B8D.png"></img>
                        </Col>
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'83%', marginTop:'19px'}}  src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/33723C99-6F7B-4F8E-87DC-436E93BD6ADF.png"/>
                        </Col>
                    </Row>
                    <h3 align="center" style={{ fontFamily: 'Nanum Pen Script' ,color: '#585757'}}>
                    Error State for Misheard Commands
                    </h3>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Unsupported Features/ Machine Learning</b>
                    </h2>
                    <Row >
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'85%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D0109D2E-33BC-4F4C-B7CA-C488288C7168.png"></img>
                        </Col>
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'85%'}}  src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/B0D313D1-19CC-4034-83B8-6988895EE6AB.png"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row >
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'80%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D62BC45F-062E-448F-BA72-5A43A42883A4.png"></img>
                        </Col>
                        <Col lg={{span:12}} xs={{span:12}}>
                            <img style={{width:'87%', marginTop:'-10px'}}  src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/48C1F40C-7806-411A-899B-B549FCB09261.png"/>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <h2 align="left" style={{color: '#15204e', fontFamily: 'Raleway'}}>
                        <b>Pro Users</b>
                    </h2>
                    <Row > 
                        <Col lg={{span:8}} xs={{span:12}}>
                            <video style={{width:'85%'}} loop="true" autoplay="autoplay" muted>
                                <source src={pUser} type="video/mp4"/>
                        video tag is not supported
                    </video> 
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}} src={pu2}></img>
                        </Col>
                        <Col lg={{span:8}} xs={{span:12}}>
                            <img style={{width:'85%'}}  src={pu3}></img>
                        </Col>
                    </Row>
                    <h3 align="center" style={{ fontFamily: 'Nanum Pen Script' ,color: '#585757'}}>
                    Trained Pro-user flow 
                    </h3>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>

            <br/>
            <br/>

            <Row>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:20}} xs={{span:24}}>
            <br/>
            <br/>
            <div align="left" style={{color:'#15204e', fontFamily:'Raleway'}}><b>Journey 2</b></div>
            <h2 align="left" style={{
                        fontFamily:'Raleway',
                        color: '#585757'
                    }}><b>Accepting a Ride</b></h2>
                    <p className="rapidoHp">
                        Initially, we were asked to work for VUI for the book journey. But during our research we found that the Driver’s had problems with following directions and accepting rides especially while picking up customer calls when they’re driving. We didn’t want it to be just VUX but wanted to provide updates through voice announcements for the Drivers, mostly while they are riding. Example: Any messages sent by the customer, other customer details, distance and time left to reach the riders destination and being able to give commands while driving.
                    </p>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>

            <br/>
            <br/>
            <h2 align="left" className="showOnMobile" style={{display:'none', fontFamily:'Raleway', color:'#15204e'}}><b>Voice Indicators for Driver</b></h2>
            <Row>
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            <Col lg={{span:8}} xs={{span:24}}>
                <img style={{width:'60%'}} src={rapido4}/>
            </Col> 
            <Col lg={{span:12}} xs={{span:24}}>
            <br/>
            <br/>
                <h2 align="left" className="rapidoH showOnDesktop" style={{fontFamily:'Raleway'}}>Voice Indicators for Driver</h2>
                <p align="left" className="rapidoHb" style={{fontSize:'19px'}}>
                    Pick up Location and Drop off Location <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>Your ride is from KFC Signal, HSR Layout to Grand Hotel, HSR Layout.</span>
                    <br/>
                    <br/>
                    Minutes to Reach
                    <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>Pick up is 10 mins away.</span>
                    <br/>
                    <br/>
                    Total Distance Covered
                    <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>3 km will be the distance from your pickup to drop location.</span>
                    <br/>
                    <br/>
                    Accept or Decline Ride
                    <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>Would you like to ACCEPT or DECLINE?</span>
                </p>
            </Col> 
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            </Row>
            <br/>
            <br/>
            <h2 align="left" className="showOnMobile" style={{display:'none', fontFamily:'Raleway', color:'#15204e'}}><b>Voice Commands</b></h2>
            <Row>
            <Col lg={{span:2}} xs={{span:24}}></Col>  
            <Col className="showOnMobile" style={{display:'none'}} lg={{span:8}} xs={{span:24}}>
                <img style={{width:'60%'}} src={rapido5}/>
            </Col>
            <Col lg={{span:12}} xs={{span:24}} style={{paddingTop:'50px'}}> 
                <h2 align="left" className="rapidoH showOnDesktop" style={{fontFamily:'Raleway'}}>Voice Commands</h2>
                <p align="left" className="rapidoHb" style={{fontSize:'17px'}}>
                    Would you like to ACCEPT or DECLINE?
                    <br/>
                    <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>Accept / Yes / OK / Accept/ Haan/ Howdu/ Sari ride eduthukaran</span>
                    <br/>
                    <span style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>Ride Reject / No / Decline / Reject Ride/ Nahi/ Illai/ Illa/ Beda</span>

                </p>
            </Col> 
            <Col className="showOnDesktop" lg={{span:8}} xs={{span:24}}>
                <img style={{width:'60%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/33F10BD7-71C0-4285-A0D9-C05E0BAA3F7A.png"/>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            </Row>
            <br/>
            <br/>
            <h2 align="left" className="showOnMobile" style={{display:'none', fontFamily:'Raleway', color:'#15204e'}}><b>En route/ Reaching Destination</b></h2>
            <Row>
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            <Col lg={{span:8}} xs={{span:24}}>
                <img style={{width:'60%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/43256E7C-57E8-4CDA-B99E-E03A626000C4.png"/>
            </Col> 
            <Col lg={{span:12}} xs={{span:24}}>
            <br/>
            <br/>
                <h2 align="left" className="rapidoH showOnDesktop" style={{fontFamily:'Raleway'}}>En route/ Reaching Destination</h2>
                <p align="left" className="rapidoHb" style={{fontSize:'17px', fontFamily:'Raleway'}}>
                    
                    When the Driver is on his way or has reached his destination point the screen changes to be contextual to what the Driver might say at this point.
                    <br/>
                    <br/>
                    The Driver can use these commands to for directions or send a message or call the customer.
                    <br/>
                    <br/>
                    <p style={{fontFamily:'Nanum Pen Script', fontSize:'22px'}}>
                        "Give me directions to the pickup location."
                        <br/>
                        "Rasta dikhaye."
                        <br/>
                        "Eppdi Ponum"
                        <br/>
                        "I've Arrived / I'm Here."
                        <br/>
                        "Call Customer / Customer name."
                        <br/>
                        "Mein Pohuchgaya"
                        <br/>
                        “Customer ko call Karo."
                        <br/>
                        “Vanuatu"
                    </p>






                </p>
            </Col> 
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            </Row>
            <br/>
            <br/>
            <Row style={{backgroundColor:'#f6fbff', paddingTop:'90px', paddingLeft:'10px', paddingRight:'10px', paddingBottom:'150px', marginBottom:'-60px'}}>
            
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            <Col align="left" lg={{span:7}} xs={{span:24}}>
            <h4 style={{fontFamily:'Raleway', color:'#f6d70f'}}><b>UPDATE</b></h4>
                    <h2 className="rapidoH">Currently under work with Slang Labs</h2>
            </Col> 
            <Col align="left" lg={{span:1}} xs={{span:24}}></Col>
            <Col lg={{span:12}} xs={{span:24}}>
            <h4 style={{fontFamily:'Raleway', color:'#f6fbff'}}><b>.</b></h4>
                    <p className="rapidoHp"> 
                        It was really an exciting experience to be a part of Rapido’s and Slang Labs experimental design. At the moment, we have not rolled out the updated experience to enough users to gather statistical significance to validate the success of the new design and are hoping to get some feedbacks obstructive or positive.
                    </p>
            </Col> 
            <Col lg={{span:2}} xs={{span:24}}></Col> 
            </Row>
        </div>
    )
}