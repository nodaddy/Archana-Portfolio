import React from 'react';
import './Selfi.css'
import {useEffect, useState} from 'react'; 
import {Row, Col, Input} from 'antd'; 
import selfiMockup from './../../assets/selfi/selfiMockup.png';
import selfiForm from './../../assets/selfi/selfiForm.png';
import selfieIa from './../../assets/selfi/selfieIa.png';
import phaseNegative from './../../assets/selfi/phaseNegative.png';
import elleMap from './../../assets/selfi/elleMap.png';
import theInfo from './../../assets/selfi/theInfo.png';
import weDesigned0 from './../../assets/selfi/weDesigned0.png';
import na0 from './../../assets/selfi/na0.png';
import na1 from './../../assets/selfi/na1.png';
import na2 from './../../assets/selfi/na2.png';
import g_61 from './../../assets/selfi/group-61.svg';
import p1 from './../../assets/selfi/p1.png';
import p2 from './../../assets/selfi/p2.png';
import circleAtBack from './../../assets/selfi/circleAtBack.png';
import Alli from './../../assets/selfi/alli.png';
import AlliM from './../../assets/selfi/AlliM.png';

import ss from './../../animation_screens/ss.mp4';

import ContentProtection from '../content_protection';

const selfiImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D8473546-2CE0-4561-B5C7-EE6F90ACA4FA.svg";
const selfiLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2C3D8B4C-0F52-4937-90C7-E2AE414818D9.png";
export const lockIcon = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/373D7483-4A00-449A-96E4-6899204BBE2D.svg";

export default function Selfi(props){

    const [hasAccess, setHasAccess] = useState(true);

    useEffect(()=>{
        //window.scrollTo(0, 0);
    }, [])

    return (
        hasAccess ?  <div align="center" id="selfi">
                    {/*<h3 style={{fontFamily:'Raleway', color:'#796b6d'}}>Case Study &nbsp; - &nbsp; 2019 - 2020</h3>*/}
                    <div className="showInDesktop" style={{fontSize:'48px',fontFamily:'serif', color:'#796b6d', marginBottom:'80px', width:'70%'}}>
                        The Development of a Mobile Health App 
                        for Breast Cancer Self-Management 
                    </div>
                    <div className="showInMobile" style={{fontSize:'20px', display:'none', fontFamily:'serif', color:'#796b6d', marginBottom:'20px', width:'80%'}}>
                        The Development of a Mobile Health App 
                        for Breast Cancer Self-Management 
                    </div>
                    <Row>
                        <Col lg={{span:2}} md={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:0}} md={{span:0}} xs={{span:24}}>
                            <img style={{width:'85%'}} src={selfiImg}></img>
                        </Col>
                        <Col lg={{span:20}} md={{span:20}} xs={{span:0}}>
                            <img style={{width:'65%'}} src={selfiImg}></img>
                        </Col>

                        <Col lg={{span:2}} md={{span:2}} xs={{span:24}}></Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/> 
                    <Row className="selfiM">
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col align="left" lg={{span:7}} xs={{span:24}}>
                        <div align="left" className="selfiH showInDesktop" style={{textAlign:'left'}}>
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
                            <div align="left" className="selfiH showInMobile" style={{textAlign:'left', display:'none'}}>
                            Making Breast Health more accessible and empowering 
                            people around the world with breast health care and support.
                            </div>
                            <br/>
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
                            <div style={{marginTop:'18px'}} className="selfiHp">
                            A functional prototype of the Selfi Scanner device developed by iBreastExam’s sensor technology platform.
                            </div>
                        </Col>
                        <Col align="left" lg={{span:2}} xs={{span:24}}></Col>
                    </Row>
                    <br/> 
                    <Row className="selfiM">
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:20}} xs={{span:24}} align="left">
                            <h1 align="left" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>agenda</h1>
                            
                            <div style={{fontSize:'23px', fontFamily:'serif'}} className="selfiHp">
                            Our Goal was to make breast health the new normal and design the Selfi app for women to monitor their own breast health by using the Selfi device conveniently, from the privacy of their homes, without pain or radiation.
                            </div>
                            <br/>
                            <br/>
                            <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2909DCB3-3CFB-4638-948A-94ED185C5981.svg"/>
                            <br/> 
                            <div style={{color:'#ff6b63', fontFamily:'Raleway', marginTop:'10px'}}><b>DISCOVER/ INSIGHTS</b></div>
                            
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}></Col> 
                    </Row>
                    <br/>
                    <Row className="selfiM">
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:13}} xs={{span:24}} align="left"> 
                        <div style={{textAlign:'left'}} className="selfiH">Why Design a BSE app?</div>
                        <br/>
                        <div className="selfiHp">
                            Breast cancer is the most frequently diagnosed cancer and the leading cause of cancer-related death in females worldwide, accounting for 23% of all cases 
                            of cancer and 14% of total cancer deaths. Each year, a large number of women in the world are diagnosed with breast cancer, and the incidence of breast cancer has increased significantly in the past decade, making this cancer a common health problem among global women, particularly in rural areas.
                        </div>
                        <br/>
                        <div className="selfiHp">
                        <ul className="ulSelfi">
                        <li>Over 300,000 people in the US is diagnosed with breast cancer, with an estimated 12,000 of those
                            <span style={{color:'#15204e', fontWeight:'700'}}> diagnosed expected to be under the age 
                        of 40.</span> Early detection is pivotal to ensuring a high likelihood of survival, which 
                        is why the importance of self-check is the no 1 priority for both men and women .
                        </li>
                        <br/>
                        <li> According to Johns Hopkins Medicine, 40% of diagnosed breast cancers are detected by women who feel a lump. 
                        <span style={{color:'#15204e', fontWeight:'700'}}>  All adult women are encouraged to perform BSE( Breast Self- Examination) at least once a month. </span>
                          BSE is not a replacement to getting routine mammograms.</li>
                        <br/>
                        <li>
                                Breast Self-Examination (BSE) is a procedure by which women physically examine their own breasts in the privacy of their own homes. 
                                <span style={{color:'#15204e', fontWeight:'700'}}> The goal of BSE 
                        is to detect sub-surface lumps or changes which can be brought to the doctor’s attention and get advice on follow-on diagnostics such as mammogram. Since BSE is a manual, subjective procedure, many women are unsure how to perform a BSE, 
                        and unsure how to interpret what they feel. </span>
                        As a result, some women may be reluctant to perform BSEs, and the effectiveness of BSEs vary dramatically among those who perform them. Currently there are no digital health solutions or devices to guide or assist women to perform BSEs at home.
                        
                                </li>
                        </ul>
                        
                        </div>
                        
                        </Col>
                        <Col lg={{span:7}} xs={{span:24}} align="center"> 
                        <img style={{width:'85%', marginTop:'50px'}} src={selfiMockup}/>
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}> </Col>
                    </Row>
                     <br/>
                    <Row style={{marginBottom:'55px'}} className="selfiM" >
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:20}} xs={{span:24}}>
                        <h1 align="center" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>Needfinding  ?</h1>
                        <div className="selfiHp" style={{textAlign:'center'}}>
                            To better understand the current scene of breast health awareness  and discover opportunities where an app 
                            might help. We interviewed a few doctors and patients at Bangalore Baptist Hospital who were using the SELFI 
                            device for trials, asking their views and feelings about mammography and how would they feel about making SELFI 
                            a household item for monthly breast checkups? 
                        </div>
                        <img style={{width:'100%', marginTop:'30px'}} src={selfiForm}/>
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                    </Row> 
                    <Row className="selfiM">
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:13}} xs={{span:24}} align="left" style={{paddingBottom:'65px'}}> 
                        <div style={{textAlign:'left'}} className="selfiH">Key Learnings</div>
                        <br/> 
                        <div className="selfiHp">
                        <ul>
                        <li>  Many patients have misconceptions and anxieties about mammography. Some patients may misunderstand or might be confused by changes or updates in official recommendations about the frequency for screening mammography or the age to begin obtaining mammograms. 



                        
                        </li>
                        <br/>
                        <li>  
                        Although most women strongly agree that mammograms are important, many are not actually getting them and looking for more connvenient methods like BSE. 
        
                        </li>
                        <br/>
                        <li>               
                            A further breakdown by age showed that women over 50 and women with a prior history of mammography had slightly better knowledge of mammography than women in the 20–40 age group, 

                                </li>
                        <li>Asked to rate 10 possible reasons for scheduling and obtaining a mammogram, the majority of respondents said that a recommendation from a healthcare provider (56%) 
                        and a reminder or assistance scheduling at an annual check-up (53%) were the greatest motivators. 
                        </li>
                        </ul>
                        
                        </div>
                        
                        </Col>
                        <Col lg={{span:7}} xs={{span:24}} align="center" > 
                        <img className="showInDesktop" style={{width:'85%', marginTop:'50px', position:'absolute', bottom:'0px', right:'20px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/BA49E97B-0D0A-4F6F-B7E9-9DF87FB6B209.svg"/>
                        <img className="showInMobile" style={{width:'85%', marginTop:'50px', display:'none'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/BA49E97B-0D0A-4F6F-B7E9-9DF87FB6B209.svg"/>
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}> </Col>
                    </Row> 
                    <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'80px'}}>
                    <Col lg={{span:2}} xs={{span:24}}></Col>
                    <Col lg={{span:20}} xs={{span:24}}>
                        <Row>
                            <Col lg={{span:12}} xs={{span:24}} align="left">
                                <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/6C1C9051-C170-4771-852B-E017C7A2D2A8.svg"/>
                                <div style={{marginTop:'10px', marginBottom:'10px', color:'#ff6b63'}}>DEFINE/ SYNTHESIZE</div>
                                <div style={{textAlign:'left'}} className="selfiH">What we gathered</div>
                                <br/>
                            </Col>
                            <Col lg={{span:12}} xs={{span:24}} align="right" className="showInDesktop" style={{marginTop:'20px'}}>
                            <h1 style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>gather  +  devlop……</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                            
                                <div className="selfiHp">
                                What we found from our research findings about the lack of breast health awareness amongst women. In order for people to start performing BSE (Breast Self-Examination) more often, they must feel the need for a self check-up. And that desire for behavioural change stems from knowing why change is necessary. We wanted to develop a habit of Breast Wellness in every household. We turned to using motivators to help people understand the need of BSE.
                                <br/>
                                <br/>
                                We synthesised the research insights into opportunity areas in the form of user needs and distilled those into questions to guide us

                                </div>
                                <br/>
                                <div className="selfiHp" style={{fontSize:'23px', fontFamily:'serif'}}>
                                How do we create a trustworthy experience for women, keeping privacy
                                <br/>
                                concerns in mind to do a BSE through the app?
                                <br/>
                                <br/>
                                What motivators shall increase BSE awareness?
                                <br/>
                                <br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span:2}} xs={{span:24}}></Col>
                    </Row>
                    <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}>
                                    <Col xs={{span:24}} lg={{span:8}} align="left">
                                        <img style={{width:'90%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/A6868F65-16C7-4EDC-9C5C-1DB2B5F0B648.svg"></img>
                                        <br/>
                                        <br/>
                                    </Col>
                                    <Col xs={{span:24}} lg={{span:14}} style={{textAlign:'left'}}>
                                        <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/78458AF2-232F-464A-B555-BBEF69D4FFDD.svg"/>
                                        <div style={{marginTop:'10px', marginBottom:'15px', color:'#ff6b63'}}>DEFINE/ SYNTHESIZE</div>
                                
                                        <div style={{textAlign:'left'}} className="selfiH">
                                        What we planned
                                        </div> 
                                        <br/>
                                        <div className="selfiHp">
                                        Drawing from our two important questions, we generated ideas for solutions. Some of these 
                                        <span style={{color:'#15204e', fontWeight:'700'}}>  included the ability to send referral codes to your friend for discount, making a subscription model, getting notifications when your next appointments is or scheduling an appointment, having in app mental health counsellor, 
                                        a breast cancer survivor community for sharing experience  and gamification of in-app actions. </span>
                                         We bundled these ideas in various ways to get a feel for how the most promising ones could fit within an educate-and-motivate framework.
                                        </div>
                                    </Col>
                                    <Col lg={{span:24}} lg={{span:2}} align="left"></Col>
                    </Row>
                    <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}> 
                        <Col lg={{span:2}} xs={{span:24}}></Col>

                        <Col lg={{span:20}} xs={{span:24}} align="center">
                            <div className="selfiHp" style={{textAlign:'center'}}>
                                We started started ideating with Experience Maps of different sex and age groups ranging from age 23- 50 years, which allowed us to visualize how our solutions would play out in real life scenarios and understand how specific features would fit within the app’s lifecycle.The Experience Map helped us in bringing down our user group to 3 primary user types 
                            </div>
                        </Col> 
                        <Col lg={{span:2}} xs={{span:24}}></Col>

                    </Row>
                    <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}> 
                        <Col lg={{span:2}} xs={{span:24}}></Col>

                        <Col lg={{span:7}} xs={{span:24}} align="center" style={{padding:'6px'}}>

                            <h1 style={{fontFamily:'Prompt-SemiBold', color:'#ff6b63'}}>01</h1>
                            <h3 style={{fontFamily:'serif', fontSize:'30px', color:'#585757'}}>The Primary User</h3>
                            <div className="selfiHp" style={{textAlign:'center'}}>
                             Elle has dense breasts and while during her mammograms checkups she endures pain and is looking for other painfree alterantives
                             </div>
                        </Col> 
                        <Col lg={{span:7}} xs={{span:24}} align="center" style={{padding:'6px'}}>
                            <h1 style={{fontFamily:'Prompt-SemiBold', color:'#ff6b63'}}>02</h1>
                            <h3 style={{fontFamily:'serif', fontSize:'30px', color:'#585757'}}>The Survivor</h3>
                            <div className="selfiHp" style={{textAlign:'center'}}>
                               Miranda is a Survivor and has a family history of breast cancer, hence she is looking for other convenient methods for regulary checking her 
                                breast health
                            </div>
                        </Col> 
                        <Col lg={{span:7}} xs={{span:24}} align="center" style={{padding:'6px'}}>
                            <h1 style={{fontFamily:'Prompt-SemiBold', color:'#ff6b63'}}>03</h1>
                            <h3 style={{fontFamily:'serif', fontSize:'30px', color:'#585757'}}>The Well- Wisher</h3>
                            <div className="selfiHp" style={{textAlign:'center'}}>
                                John is a dotting husband who after hearing about the importance of breast health from his colleagues and to help her maintain breast wellness.
                                He plans to gift her the fussfree
                                SELFI device.   
                            </div>
                        </Col> 
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                    </Row>
                    <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}>
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:20}} xs={{span:24}}>
                            <h1 align="left" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>Elle’ s  experience  map…</h1>
                            <img style={{width:'90%'}} src={elleMap}/>
                          
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                    </Row>
                    <Row style={{backgroundColor:'#faf7f4', paddingTop:'35px', paddingBottom:'30px'}}>
                        <Col lg={{span:5}} xs={{span:24}}></Col>
                        <Col lg={{span:14}} xs={{span:24}}> 
                            <div className="selfiHp" style={{textAlign:'center'}}>
                                We worked on Elle’s Scenario Map to further gain persepctive of a First Time User to a Regular User and worked 
                                on the features for the 1st phase of the application 
                            </div>
                        </Col>
                        <Col lg={{span:5}} xs={{span:24}}></Col>
                    </Row>
                    <br/>
                    <Row className="selfiM" style={{paddingBottom:'30px',  paddingTop:'30px'}}>
                        <Col xs={{span:24}} lg={{span:2}}></Col>
                        <Col xs={{span:24}} lg={{span:20}}>
                            <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/734A34E9-A0FD-4E89-80CE-1E13BD5E88DA.svg"/>
                            <br/>
                            <br/>
                            <div style={{fontFamily:'Raleway', color:'#ff6b63'}}><b>DESIGN/ PROTOTYPE</b></div>
                            <br/>
                            <br/>
                            <div className="selfiH">
                                What we designed
                            </div>
                            <br/>
                            <div className="selfiHp">
                            Based on our Insights and Experience Maps, we were able to create the Information Architecture for the app to get closer to the eventual formation of the app, reveal holes in the initial flows and interactions, and derive more realistic feedback.
                            </div>
                            <br/>
                            <br/>
                            <Row className="selfiM"> 
                                <Col xs={{span:24}} lg={{span:2}} align="left"></Col> 
                                <Col xs={{span:24}} lg={{span:20}} align="left">
                                    <img className="showInDesktop" style={{width:'100%'}} src={Alli}/>
                                    <img className="showInMobile" style={{width:'100%',display:'none'}} src={AlliM}/>
                                </Col> 
                            </Row>
                        </Col>
                        <Col xs={{span:24}} lg={{span:2}}></Col>
                    </Row>

                    <Row className="selfiM"> 
                                <Col xs={{span:24}} lg={{span:24}}>
                                 
                                <br/>
                                <img style={{width:'90%'}} src={theInfo}/>
                                <br/>
                                <div className="selfiHp" style={{textAlign:'center', padding:'15px'}}>
                                The Information Architecture emerged through two rounds of user testing and heuristic evaluation 
                                <br/>
                                with feedback that we  incorporated into low-fidelity wireframes
                                </div>
                                <br/>
                                <Row>
                                    <Col span={8}>
                                        <img style={{width:'70%'}} src={na0}></img>
                                    </Col>
                                    <Col span={8}>
                                        <img style={{width:'84%'}} src={na1}></img>
                                    </Col>
                                    <Col span={8}>
                                        <img style={{width:'80%'}} src={na2}></img>
                                    </Col> 
                                </Row>
                                <br/>
                                <div className="selfiHp" style={{textAlign:'center'}}>
                                Snippets of the Key Screens that we worked on to set your medical history and 
                                keep a track of your
                                <br/> 
                                scans and upcoming appointments   
                                </div>
                                </Col> 
                        </Row>
                        <br/>
                        <br/>
                        <Row className="selfiM" style={{background:'#faf7f4', paddingTop:'60px', paddingBottom:'30px'}}>
                            <Col xs={{span:24}} lg={{span:'2'}}></Col>
                            <Col xs={{span:24}} lg={{span:'20'}}>
                            <Col xs={{span:24}} lg={{span:'2'}}></Col>
                                <div className="selfiH" style={{textAlign:'center'}}>
                                Perfecting the Grid Map for Scanning
                                </div>
                                <br/>
                                <div className="selfiHp" style={{textAlign:'center'}}>
                                    All Breasts are beautiful and unique and they all come in a wide range of shapes and sizes. No two people 
                                    have breasts that look exactly the same. We had to work around 12 different breast types and sizes to figure out the
                                    perfect Grid Map to scan all types of breast areas.
                                </div> 
                                <br/>
                                <Row>
                                    <Col xs={{span:24}} lg={{span:24}}> 
                                        <img style={{width:'100%'}} src={"https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/5842D75B-BBE8-4422-9994-EF7BEE4CFE26.png"}/>
                                        <br/>
                                        <br/>
                                        <div className="selfiHp" style={{textAlign:'center'}}>
                                        Before beginning with the Visual Protyping. We had to crack the Scanning Process, so we got in touch with someone who made bras from scratch, and learned about sizing and used that information. We accurately measured the length and width of every cup size, of 2-3 different brands (that we picked keeping in mind the diversity of bra cups), and using an average of those measurements, create a grid that caters to every cup size separately.
                                        </div>
                                        <br/>
                                        <br/>
                                        <Row>
                                            <Col xs={{span:24}} lg={{span:12}}>
                                                <div className='selfiHp'>
                                                    We worked around this method which involves a very loose mathematical formula based on how band size and cup size are calculated. In the image on the right, the underbust circumference is represented by <b>B</b> and the bust circumference is represented by <b>A</b>. The underbust circumference <b>(B)</b> represents the band size, while difference between the bust and underbust circumferences <b>(A-B)</b> is converted into a cup size. If we assume that the diameter of the sensor is S , then,
                                                    <br/>
                                                    <br/>
                                                   <img className="showInMobile" style={{width:'60%', display:'none'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7CCBD315-A240-4341-9317-A2674E2974D7.svg"/>
                                                    <br/>
                                                    <br/>
                                                    <b>No. of columns: A/4S</b>
                                                    <br/>
                                                    <br/>
                                                    The number of rows is heavily approximated by starting with the assumption that the grid would mostly have more rows than columns. With this assumption, the number of rows in the grid has to be equal to (if not more than) the number of columns. The additional rows needed can be ascertained by dividing the cup size by the sensor size. So,
                                                    <br/>
                                                    <br/>
                                                    <b>No. of rows: A/4S+(A-B)/S </b>
                                                    <br/>
                                                    <br/>
                                                    Example: <br/>
                                                    If their bra size is 32B<br/>
                                                    Underbust circumference (B): 32in<br/>
                                                    Bust circumference (A): 34in<br/>
                                                    Assuming that the sensor is 2 inches in diameter,<br/>
                                                    <b>No. of columns: 34/8= 5</b><br/>
                                                    <b>No. of rows: 5+ 2/2= 6</b><br/>
                                                </div>
                                            </Col>
                                            <Col xs={{span:24}} lg={{span:12}} align="center">
                                            <br/>
                                                <img className="showInDesktop" align="right" style={{marginBottom:'54px',width:'70%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7CCBD315-A240-4341-9317-A2674E2974D7.svg"/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <img style={{width:'50%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/5E56D502-1FF1-442E-84F7-24C6834704E5.svg"/>
                                                <br/>
                                                <br/>
                                                <div style={{textAlign:'center'}} className="selfiHp">Grid for a size 32B Bra</div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <br/>
                                        <Row>
                                            <Col span={24}>
                                                <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3CC5C840-03E9-40BC-82F7-FBBB9BC88140.svg"/>
                                                <br/>
                                                <br/>
                                                <div style={{textAlign:'center'}} className="selfiHp">
                                                    We went ahead with 5 columns and 6 rows approach for the Grid Map which worked the best all breast shapes 
                                                    making sure no area of the breast gets missed out while placing the puck/sensor on the grids by the user during Scanning. 
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row> 
                            </Col>
                            <Col xs={{span:24}} lg={{span:'2'}}></Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row style={{marginTop:'45px'}}>
                            <Col lg={{span:2}} xs={{span:24}}></Col>
                            <Col lg={{span:20}} xs={{span:24}}>
                            <h1 align="center" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>Prototyping  &nbsp;a &nbsp; better&nbsp;  solution</h1>
                            <br/>
                            <div className="selfiHp" style={{textAlign:'center'}}>
                                To further develop the SELFI app, we revamped the key features and worked on the visual design
                                <br/>
                                with illustrations to convey a better story
                            </div>
                            </Col>
                            <Col lg={{span:2}} xs={{span:24}}></Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className="selfiM">
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        <Col lg={{span:9}} xs={{span:24}}>
                            <img style={{width:'100%'}} src={circleAtBack}/>
                        </Col>
                        <Col lg={{span:1}} xs={{span:24}}></Col>
                        <Col lg={{span:10}} xs={{span:24}}>
                            <div style={{textAlign:'left'}} className="selfiH">
                            Manage your Profile settings and Scanning Timeline
                            </div>
                            <br/>
                            <div className="selfiHp">
                                With only a couple of clicks sort your profile settings
                                and update your medical history for clinicians to refer to. Watch a timelapse of your overall scanning
                                results through out the year to keep up with your
                                breast health.
                            </div>
                            <br/>
                            <Row>
                                <Col span={12}>
                                    <img style={{width:'80%'}} src={p1}/>
                                </Col>
                                <Col span={12}>
                                <img style={{width:'80%'}} src={p2}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{span:2}} xs={{span:24}}></Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className="selfiM">
                        <Col lg={{span:4}} xs={{span:24}}></Col>
                        <Col lg={{span:7}} xs={{span:24}} style={{paddingTop:'10%'}}>
                            <div style={{textAlign:'left'}} className="selfiH">Easy to follow Scanning Steps</div>
                            <br/>
                            <div className="selfiHp">
                            The non-invasive scanning method makes the scanning process for Users less intimidating. After connecting your app with the device. The Users will be able to select their breast type and size which will redirect them to the Grid Map for the Scanning Process. 
                            </div>
                        </Col>
                        <Col lg={{span:13}} xs={{span:24}}
                         align="center"
                         style={{
                            background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7C68C7D5-3C81-4EFC-885C-55C9B08C4581.svg')",
                            backgroundRepeat:'no-repeat',
                            backgroundSize: 'contain',
                            backgroundSize: '90%',
                            backgroundPosition: 'right top',
                            paddingBottom:'50px'
                        }}
                        >
                     <br/>
                        <br/>
                        <video style={{width:'45%', backgroundColor:"white", borderRadius:'50px', border:'0px outset silver'}} loop="true" autoplay="autoplay" muted>
                                <source src={ss} type="video/mp4"/>
                        video tag is not supported
                    </video> 
                        <br/>
                        </Col> 
                        </Row>
                        <Row
                        style={{
                            background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/B69E311B-8065-4FC7-AD30-999CA2EA23F6.svg')",
                            backgroundRepeat:'no-repeat',
                            backgroundSize: 'cover', 
                            backgroundSize: '100%', 
                            backgroundPosition: 'center top',
                            paddingTop:'200px',
                            marginBottom:'-100px',
                            paddingBottom:'100px'
                        }}
                        >
                            <Col span={2}></Col>
                            <Col span={20}>
                            <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/56E20561-C0AC-43DA-923F-0CE1EB575BF6.svg"/>
                            <br/>
                            <br/>
                            <div style={{fontFamily:'Raleway', color:'#ff6b63'}}><b>OUTCOME</b></div>
                            <br/>
                            <br/>
                            <div className="selfiHp" style={{textAlign:'left'}}>                                
                                Selfi was a really exciting and fun project for me to work on as it provided real value for me as a women and being able to work and create something for breast wellness, it involved a ton of research, detailed interactions and planning which
                                helped me understand a Users perspective and ultimately aim for better solutions . However, shifting priorities and changing roadmaps have delayed the launch of this App. Still, I learned some important takeaways from this project related to product and business processes.
                                <br/>
                                <br/> 
                                <br/> 
                                <div style={{textAlign:'left', color:'#15204e'}}>
                                <b>How to adapt to changing requirements</b> 
                                <br/>
                            <br/>
                            </div>
                            </div>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                        <Row className="selfiHp" style={{backgroundColor:'#faf7f4', textAlign:"left", paddingBottom:'50px'}}>
                            <Col span={2}></Col>
                            <Col span={20}>
                                New timelines, resourcing issues, and reprioritization meant the scope of the project was constantly changing. I had to adapt to those changes and still deliver the best design in time within the given timeframe.
                                <br/>
                                <br/>
                                <b style={{color:'#15204e'}}>Always fight for good UX</b>
                                <br/>
                                <br/>
                                We as a team had to work under very strict technical constraints, but still fought for what we believed is essential to having a good user experience.
                                <br/>
                                <br/>
                                <b style={{color:'#15204e'}}>Don’t overpromise and underdeliver</b>
                                <br/>
                                <br/>
                                I learned how to define a true MVP vs. something that is simply not usable and therefore not shippable.
                            </Col>
                            <Col span={2}></Col>
                            </Row>
                        <br/>
                        <br/> 
                </div>
                :
                <>
            <div style={{paddingTop:'30vh', backgroundColor:'white', height:'90vh', marginBottom:'-10000px'}} align="center">
                <img src={lockIcon} style={{width:'39px'}}/>
                <br/>
                <h3 style={{color:'#5e5a5a', fontFamily:'Raleway', marginTop:'32px', marginBottom:'32px'}}>
                    <b>
                        To comply with my non-disclosure agreement. 
                    <br/>
                    This content is protected. 
                    </b>
                </h3>
                <p style={{marginBottom:'50px', color:'#5e5a5a', fontFamily:'Raleway'}}>To view please enter password.</p>
                <Input type="password"
                onChange={(e)=>{
                    if(e.target.value == "acrassicauda96"){
                        setHasAccess(true);
                    }
                }}
                placeholder="Enter Password" style={{fontSize:'15px', width:'230px'}}></Input>
            </div>
        </>
    )
}
