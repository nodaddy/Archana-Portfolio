import {useEffect, useState} from 'react';
import './Ving.css';
import {Row, Col, Input} from 'antd'; 
import vingBottom from './../../assets/vingBottom.png'

import ving1 from './../../assets/ving/ving1.png'
import mybookings from './../../assets/ving/mybookings.png'
import neighbourhood from './../../assets/ving/neighbourhood.png'
import organiser from './../../assets/ving/organiser.png'
import alert from './../../assets/ving/alert.png'
import redd from './../../assets/ving/red.png'
import chooseplan from './../../assets/ving/chooseplan.png'
import billing from './../../assets/ving/billing.png'
import reminderbooking from './../../assets/ving/reminderbooking.png'
import laptop from './../../assets/ving/laptop.png'
import mobile1 from './../../assets/ving/mobile1.png'
import mobile2 from './../../assets/ving/mobile2.png'
import social from './../../assets/ving/social.png'

export const lockIcon = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/373D7483-4A00-449A-96E4-6899204BBE2D.svg";

//const VingImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2A808044-50B4-473F-875D-DBDD3C8A5CC8.png";
const VingLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/C4A85488-4893-4EB3-9D36-0064AF877B08.png";

export default function Ving(){


    const [hasAccess, setHasAccess] = useState(false);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        hasAccess ?   <div align="center" id="ving">
            <h4 style={{fontFamily:'Raleway', color:'#796b6d'}}>Case Study  -  2019</h4>
            <div id="vingMainH" style={{width:'80%', fontFamily:'Palatino-Roman', color:'#796b6d', marginBottom:'10px', fontSize:'48px'}}>
            Creating a Software for 
            Booking rooms online
            </div>
            <Row className="vingM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={ving1}></img>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/> 
            <Row className="vingM" id="row2" style={{ marginTop:'-200px', paddingTop:'290px', backgroundSize:'contain', background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/90976B30-E373-443D-A590-204AD34B8039.svg")',backgroundPosition:'right', backgroundRepeat:'no-repeat'}}>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col align="left" lg={{span:8}} xs={{span:24}}> 
                <img id="vingLogo" style={{width:'270px'}} src={VingLogo}/> 
                <div className="vingH">
                Online Meeting Room Booking System
                </div>
                <br/>
                <div className="vingHp">
                Ving is a web application that can be used by the end- users to book VING meeting rooms online as per their requirements. Ving provides a purpose built meeting room booking software that integrates seamlessly with your website.
                </div>
                <br/>
                <br/>
                <h4 style={{fontFamily:'Raleway', color:'#7791ff'}}><b>AREA</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'16px', color: '#585757'}}>
                    
                    App Design, Visual Design, Service Design

                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#7791ff'}}><b>MY ROLE</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'16px', color: '#585757'}}>
                     
                    Lead the UI design, discovery, research, requirements and design through launch. 
                </p> 
            </Col>
            <Col lg={{span:9}} xs={{span:0}} align="right">
                <img className="threeImgs" id="threeImgs0" style={{width:'65%', marginTop:'-100px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/E382511C-923B-489A-BDF2-83773FBBC4C0.png"/>
                <br/>
                <img className="threeImgs" id="threeImgs1" style={{width:'50%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/886266C7-C19B-408E-864D-D8F818160FB1.png"/>
            </Col> 
            <Col lg={{span:5}} xs={{span:0}} align="right" style={{border:'0px solid black', position:'relative'}}>
            <img className="threeImgs" id="threeImgs2" style={{width:'95%', marginTop:'100px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/01902CE5-DFEB-4166-9198-32A861BF8E13.png"/>    
            </Col>
            <Col lg={{span:0}} xs={{span:24}} align="left">
            <img className="threeImgs" id="threeImgs0" style={{width:'55%', position:'relative'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/E382511C-923B-489A-BDF2-83773FBBC4C0.png"/>
            <img className="threeImgs" id="threeImgs1" style={{width:'30%', marginTop:'100px', zIndex:'9999', position:'relative'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/886266C7-C19B-408E-864D-D8F818160FB1.png"/>
            <img className="threeImgs" id="threeImgs2" style={{width:'65%', marginTop:'-320px', marginLeft:'200px', zIndex:'99', position:'relative'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/01902CE5-DFEB-4166-9198-32A861BF8E13.png"/>    
            </Col>
            </Row>
            <br/>
            <br/>
            <Row className="vingM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:8}} xs={{span:24}}>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/9B62B085-AF42-4F0E-9808-AA064943FE23.svg"/>
                    <br/>
                    <div style={{color:'#7791ff', fontFamily:'Raleway', marginTop:'10px', marginBottom:'24px'}}><b>GOAL</b></div>
                    
                    <div className="vingH">
                    A Single Application to Balance them all
                    </div>
                    <br/>
                    <div className="vingHp">
                    Our goal was to make it easy for organisations or single users to manage their Bookings and other related tasks within a single platform, where numerous employees from the same organisation across the country can join in from VING rooms for team communications with customers and other business meetings.
                    </div>
                </Col>
                <Col lg={{span:1}} xs={{span:24}}></Col>
                <Col align="right" lg={{span:13}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={mybookings}/>
                </Col> 
            </Row>
            <br/>
            <br/>
            <Row className="showInDesktop" style={{
                marginTop:'-300px',
                paddingTop:'330px',
                background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/9183A043-B1F9-49F1-B76B-8FA89B46745C.svg')",
                backgroundPosition: 'top',
                backgroundPositionX: '-60vw',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}>
                <Col span={24}>
                    <img style={{width:'85%', marginBottom:'140px'}} src={neighbourhood}/>
                </Col>
            </Row>
            <Row className="showInMobile" style={{
                display:'none', 
                background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3FCC17DC-8D74-46D4-A147-7C09AFCE3484.svg')",
                backgroundPosition: 'top',
                backgroundPositionX: '-80px',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}>
                <Col span={24}>
                    <img style={{width:'85%', marginTop:'120px', marginBottom:'100px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/CABA41D4-D377-4D91-A45F-9B02CCFC1341.png"/>
                </Col>
            </Row>
            <br/>
            <Row className="vingM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <h2 style={{fontFamily:'Palatino-Roman', fontSize:'28px', color:'#585757'}}>     
                        During discovery we found out that Business Organisations had to to manage their booking data manually through excel sheet and for end-to-end customers there was 
                        not a single platform where they can book meetings as per their requirements.
                    </h2>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row className="vingM">
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:20}} xs={{span:24}} >
            <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D85EBB51-5B45-43A8-80DB-A60111DE1070.svg"/>
            <div style={{color:'#7791ff', fontFamily:'Raleway', marginTop:'10px'}}> <b>APPROACH</b> </div>
            <br/>
            <div className="vingH" style={{marginBottom:'10px'}}>What we Planned</div> 
            <div className="vingHp" style={{textAlign:'center'}}>
                VING helped us in understanding the problems faced by the Hospitality domain organisations and design the
                web app accordingly by automating the entire process booking rooms and reducing the overhead of the admins 
                in such a way that the time spent on contacting clients, quoting and sending forms back and forth is reduced. 
                <br/>
                <br/>
                To overcome this challenge we created the VING application with two User Roles : 
                <br/>
                <b>The Organiser, The Co-Organiser</b>
            </div>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row className="vingM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:1}} xs={{span:24}}></Col>
                <Col lg={{span:8}} xs={{span:24}} align="center">
                    <div className="vingH" style={{color:'#7791ff', fontSize:'24px'}}>
                        01
                    <br/>
                    <div style={{color:'#585757'}}>The Organiser</div>     
                    <div className="vingHp" style={{fontSize:'13px', textAlign:'center'}}>
                        <br/>
                    The Organiser has access to manage the details of 
                    all the participants of an organisation on the platform, including all the business centers,they also have access to manage the pro features eg: granting access to the Organisation Admin for bookings.
                    </div>
                    </div> 
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:8}} xs={{span:24}} align="center">
                <div className="vingH" style={{color:'#7791ff', fontSize:'24px'}}>
                        02
                    <br/>
                    <div style={{color:'#585757'}}>The Co-Organiser</div>     
                    <div className="vingHp" style={{fontSize:'13px', textAlign:'center'}}>
                        <br/>
                        The Co-Organiser is addded as a Second User 
                        by the Organsiation Admin and has access to 
                        manage the details of a single business center and 
                        can make or schedule bookings  
                    </div>
                    </div> 
                </Col>
                <Col lg={{span:1}} xs={{span:24}} align="center"></Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row className="vingM" style={{background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/08BF46D8-CDD4-4995-AB3F-F8D36B062307.svg")',
            backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:20}} xs={{span:24}}>
                <img id="orgImg" style={{width:'60%'}} src={organiser}/>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
             <br/>
             <br/>
             <Row className="vingM">
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:20}} xs={{span:24}} >
            <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/22145BB8-171D-46AF-B017-3BE93B06344B.svg"/>
            <div style={{color:'#7791ff', fontFamily:'Raleway', marginTop:'10px'}}> <b>FEATURES AND FUNCTIONALITY</b> </div>
            <br/>
            <div className="vingH" style={{marginBottom:'10px'}}>What we designed</div> 
            <div className="vingHp" style={{textAlign:'center'}}>
            We designed a system where  all the user groups  can manage their inventory, manage bills, schedule dates. Follow up with upcoming meetings, form teams and seek help fom support for tutorials.
            </div>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row className="vingM">
            <Col lg={{span:3}} xs={{span:24}}></Col>
            <Col lg={{span:8}} xs={{span:24}}>
                <div className="vingH showInDesktop" align="left">
                    Manage your bookings, teams and notifications.
                </div>
                <div className="vingH showInMobile" align="center" style={{display:'none', fontSize:'25px'}}>
                    Manage your bookings, 
                    <br/>
                    teams and notifications.
                </div>
                <br/>
                <div className="vingHp" style={{textAlign:'left'}}>
                    With only a couple of clicks and sort by filters employees can book a conference room that fits their needs. Schedule dates, select room sizes. Add Co-organiser and add attendees. Follow up on their upcoming meetings. Create and manage teams.
                </div>
                <br/>
            </Col>
            <Col lg={{span:1}} xs={{span:24}}></Col>
            {/* desktop*/}
            <Col lg={{span:5}} xs={{span:0}} align="left">
                <img style={{width:'100%', display:'inline-block'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/FAF4D9BA-68A4-4CF3-A5A9-2195714B6034.png"/>
            </Col>
            <Col lg={{span:4}} xs={{span:0}} align="left">
                <img style={{width:'100%', display:'inline-block'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2B2F7149-E80C-4660-AB13-A9E6E57E4DD4.png"/>
            </Col>
            {/* mobile*/}
            <Col lg={{span:0}} xs={{span:12}} align="center">
                <img style={{width:'70%', display:'inline-block'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2B2F7149-E80C-4660-AB13-A9E6E57E4DD4.png"/>
            </Col>
            <Col lg={{span:0}} xs={{span:12}} align="center">
                <img style={{width:'100%', display:'inline-block'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/FAF4D9BA-68A4-4CF3-A5A9-2195714B6034.png"/>
            </Col>
            <Col lg={{span:3}} xs={{span:24}}></Col>
            </Row>
            <br/> 
            <Row style={{
                background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3F0962C2-BADB-48C3-B4CA-0D5448E77605.svg")',
                backgroundPosition: 'top right',
                backgroundSize: 'contain',
                backgroundRepeat:'no-repeat',
                marginTop:'-350px',
                paddingTop:'350px',
                }}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:11}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={redd}/>
                </Col> 
                <Col lg={{span:11}} xs={{span:24}} align="right">
                <img style={{width:'85%'}} src={alert}/>
                </Col> 
            </Row> 
            <Row className="vingM noBackgroundInMobile" style={{
                background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D42BB965-C9CA-4A03-9F46-82C7142A8146.svg")',
                backgroundRepeat:'no-repeat',
                backgroundSize:'contain',
                backgroundPosition:'left',
                backgroundPositionY:'-30px',
                marginTop:'30px',
                paddingTop:'10px',
                paddingBottom:'110px',
        }}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:0}} xs={{span:24}} style={{ textAlign:'center'}}>
                    <div className="vingH">
                        Manage your billing 
                        and payment methods.
                    </div>
                </Col>
                <Col lg={{span:10}} xs={{span:24}}>
                    <br/> 
                    <img style={{width:'100%'}} src={billing}/>
                    <br/> 
                    <br/> 
                    <div className="showInMobile vingHp" style={{display:'none'}}>
                    Choose from several payment options. As a VING member, you are charged once a month on the date you have signed up. You have the freedom to change your plan or cancel online at any time.
                    </div>
                    <br/>
                    <img className="showInDesktop" style={{width:'100%', marginLeft:'50px'}} src={chooseplan}/>
                    <img className="showInMobile" style={{width:'100%', display:'none'}} src={chooseplan}/>
                </Col>
                <Col lg={{span:3}} xs={{span:24}}></Col>
                <Col lg={{span:7}} xs={{span:0}} style={{paddingTop:'200px', textAlign:'left'}}>
                    <div className="vingH">
                        Manage your billing 
                        and payment methods.
                    </div>
                    <br/>
                    <div className="vingHp">
                    Choose from several payment options. As a VING member, you are charged once a month on the date you have signed up. You have the freedom to change your plan or cancel online at any time.
                    </div>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <Row
            className="vingM noBackgroundInMobile"
            style={{
                marginTop:'-150px', 
                paddingTop:'130px',
                paddingBottom:'150px',
                background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/0378630F-477E-485F-B6FB-015F00131AA9.svg")',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'right top'
                
                }}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:8}} xs={{span:0}} style={{paddingTop:'80px'}}>
                 <div className="vingH" align="left">
                 Take control of your online
                 bookings
                 </div>
                 <br/>
                 <div className="vingHp">
                 VING provides you a comprehensive Dashboard 
                to manage all aspects of your everyday meeting 
                schedules, from setting reminders to managing
                recurring weekly or monthly meetings.
                <br/>
                <br/>
                 </div>
                </Col>
                <Col lg={{span:0}} xs={{span:24}} style={{marginTop:'-80px'}}>
                 <div className="vingH" align="center">
                 Take control of your online
                 bookings
                 </div>
                 <br/>
                 <div className="vingHp" style={{textAlign:"center"}}>
                 VING provides you a comprehensive Dashboard 
                to manage all aspects of your everyday meeting 
                schedules, from setting reminders to managing
                recurring weekly or monthly meetings.
                <br/>
                <br/>
                 </div>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:10}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={reminderbooking}/>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            {/* <Row style={{backgroundColor:'#f3f4fc', paddingBottom:'100px'}}> 
                <Col lg={{span:24}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={vingBottom}/>
                </Col> 
            </Row>  */}
            <Row style={{marginBottom:'50px'}}>
                <Col span={24} align="center">
                    <img style={{width:'100%'}} src={social}/>
                     
                </Col>
            </Row>
            {/* <Row style={{
                background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2CAF893D-6FDD-414B-914C-F4086E71DEE8.svg")',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPositionY:'-130px',
                backgroundPositionX:'-35px',
                marginBottom:'50px', 
            }}>
                <Col lg={{span:12}} xs={{span:12}}>
                    <img style={{width:'100%', marginTop:'-50px'}} src={laptop}/>
                </Col>
                <Col lg={{span:6}} xs={{span:6}} align="left">
                <img style={{width:'70%', marginTop:'-50px'}} src={mobile1}/>
                </Col>
                <Col lg={{span:6}} xs={{span:0}} align="left" style={{marginTop:'-150px', marginLeft:'-20px'}}>
                <img style={{width:'80%'}} src={mobile2}/>
                </Col>
                <Col lg={{span:0}} xs={{span:6}} align="left" style={{marginTop:'-70px', marginLeft:'-20px'}}>
                <img style={{width:'75%'}} src={mobile2}/>
                </Col>
            </Row> */}
        </div>
        :
        <>
        <div style={{paddingTop:'150px', backgroundColor:'#f5f5f5', height:'100vh'}} align="center">
            <img src={lockIcon} style={{width:'39px'}}/>
            <br/>
            <h3 style={{color:'#5e5a5a', fontFamily:'Raleway', marginTop:'32px', marginBottom:'32px'}}>
                <b>
                    To comply with my non-disclosure agreement. 
                <br/>
                This content is protected. 
                </b>
            </h3>
            <p style={{marginBottom:'89px', color:'#5e5a5a', fontFamily:'Raleway'}}>To view please enter password.</p>
            <Input type="password"
            onChange={(e)=>{
                if(e.target.value == "password"){
                    setHasAccess(true);
                }
            }}
            placeholder="Enter Password" style={{fontSize:'15px', width:'230px'}}></Input>
        </div>
    </>
    )
}
