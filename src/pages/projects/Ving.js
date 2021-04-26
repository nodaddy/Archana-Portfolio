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
import las from './../../assets/ving/las.png'
import bg from './../../assets/ving/bg.png'

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
            <h3 style={{fontFamily:'Raleway', color:'#796b6d'}}>Case Study  -  2019</h3>
            <div id="vingMainH" style={{width:'80%', fontFamily:'serif', color:'#796b6d', marginBottom:'10px', fontSize:'48px'}}>
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
            <Row className="vingM" id="row2" style={{marginTop:'-500px',marginBottom:'120px', paddingTop:'560px', background:`url("${bg}")`, backgroundPositionY:'-10px', backgroundRepeatY:'no-repeat', backgroundSize:'cover', backgroundSize:'100%', backgroundPosition:'left top'}}>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col align="left" lg={{span:8}} xs={{span:24}}> 
                <img id="vingLogo" style={{width:'270px'}} src={VingLogo}/>
                <br/>
                <br/>
                <div className="showInDesktop">
                <div className="vingH">
                Online Meeting Room Booking System
                </div>
                <br/> 
                <div className="vingHp">
                Ving is a web application that can be used by the end- users to book VING meeting rooms online as per their requirements. Ving provides a purpose built meeting room booking software that integrates seamlessly with your website.
                </div>
                <br/>
                <br/>
                </div> 
                <h4 style={{fontFamily:'Raleway', color:'#7791ff'}}><b>AREA</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'16px', color: '#585757'}}>
                    
                    App Design, Visual Design, Service Design

                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#7791ff'}}><b>MY ROLE</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'16px', color: '#585757'}}>
                     
                    Lead the UI design, discovery, research, requirements and design through launch. 
                </p> 
            </Col>
            <Col lg={{span:9}} xs={{span:0}} align="right" style={{paddingTop:'40px'}}>
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
            <br/>
            <br/>
            <div className="showInMobile" style={{display:'none'}}>
                <div className="vingH">
                Online Meeting Room Booking System
                </div>
                <br/>
                <div className="vingHp">
                Ving is a web application that can be used by the end- users to book VING meeting rooms online as per their requirements. Ving provides a purpose built meeting room booking software that integrates seamlessly with your website.
                </div>
                <br/>
                <br/>
                </div> 
            </Col>
            </Row> 
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
                    <img style={{width:'100%', marginTop:'40px'}} src={mybookings}/>
                </Col> 
            </Row>
            <br/>
            <br/>
            <Row className="showInDesktop" style={{
                marginTop:'-300px',
                paddingTop:'330px',
                background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/9183A043-B1F9-49F1-B76B-8FA89B46745C.svg')",
                backgroundPosition: 'left top',
                backgroundPositionX: '-40vw',
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
                backgroundPositionX: '-10vw',
                backgroundSize:'cover',
                backgroundSize:'95vw',
                backgroundRepeat:'no-repeat', 
            }}>
                <Col span={24}>
                    <img style={{width:'85%', marginTop:'120px', marginBottom:'100px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/CABA41D4-D377-4D91-A45F-9B02CCFC1341.png"/>
                </Col>
            </Row> 
            <Row className="vingM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <h2 style={{fontFamily:'serif', fontSize:'28px', color:'#585757', marginTop:'30px'}}>     
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
                    <div className="vingH" style={{color:'#7791ff', fontSize:'24px', fontFamily:'Raleway'}}>
                        <b style={{fontSize:'30px'}}>01</b>
                    <br/> 
                    <div style={{marginTop:'10px', color:'#585757', fontSize:'30px', fontFamily:'palatino serif'}}>The Organiser</div>     
                    <div className="vingHp" style={{paddingTop:'15px',fontSize:'20px', textAlign:'center'}}>
                       
                    The Organiser has access to manage the details of 
                    all the participants of an organisation on the platform, including all the business centers,they also have access to manage the pro features eg: granting access to the Organisation Admin for bookings.
                    <br/>
                    <br/>
                    
                    </div>
                    </div> 
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:8}} xs={{span:24}} align="center">
                <div className="vingH" style={{color:'#7791ff', fontSize:'24px', fontFamily:'Raleway'}}>
                <b style={{fontSize:'30px'}}>02</b>

                    <br/> 
                    <div style={{marginTop:'10px',color:'#585757', fontSize:'30px', fontFamily:'palatino serif'}}>The Co-Organiser</div>     
                    <div className="vingHp" style={{fontSize:'20px', textAlign:'center', paddingTop:'15px'}}>
                       
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
            <Row className="vingM" style={{background:'url("https://cdn.zeplinio/6061ed0fe3392716f0cc504a/assets/08BF46D8-CDD4-4995-AB3F-F8D36B062307.svg")',
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
                paddingBottom:'50px',
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
                <Col lg={{span:10}} xs={{span:0}}>
                    <img style={{width:'100%'}} src={reminderbooking}/>
                </Col>
                
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row> 
            <Row>
            <Col lg={{span:0}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={las}/>
                </Col>
            </Row>
            {/* <Row style={{backgroundColor:'#f3f4fc', paddingBottom:'100px'}}> 
                <Col lg={{span:24}} xs={{span:24}}>
                    <img style={{width:'100%'}} src={vingBottom}/>
                </Col> 
            </Row>  */}
            <Row style={{marginBottom:'20px'}}>
                <Col span={24} align="center">
                    <img style={{width:'100%', backgroundColor:'#f3f4fc'}} src={social}/>
                     
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
                if(e.target.value == "password"){
                    setHasAccess(true);
                }
            }}
            placeholder="Enter Password" style={{fontSize:'15px', width:'230px'}}></Input>
        </div>
    </>
    )
}
