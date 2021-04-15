import './Selfi.css'
import {useEffect} from 'react'; 
import {Row, Col} from 'antd'; 
import selfiMockup from './../../assets/selfi/selfiMockup.png';
import selfiForm from './../../assets/selfi/selfiForm.png';
import selfieIa from './../../assets/selfi/selfieIa.png';
import phaseNegative from './../../assets/selfi/phaseNegative.png';

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
            <br/> 
            <Row className="selfiM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}} align="left">
                    <h1 align="left" style={{fontFamily:'Shorelines Script Bold'}}>agenda</h1>
                     
                    <div style={{fontSize:'23px', fontFamily:'Palatino-Roman'}} className="selfiHp">
                    Our Goal was to make breast health the new normal and design the Selfi app for women to monitor their own breast health by using the Selfi device conveniently, from the privacy of their homes, without pain or radiation.
                    </div>
                    <br/>
                    <br/>
                    <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/2909DCB3-3CFB-4638-948A-94ED185C5981.svg"/>
                    <br/> 
                    <div style={{color:'#ff6b63', fontFamily:'Raleway', marginTop:'10px'}}>DISCOVER/ INSIGHTS</div>
                    
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col> 
            </Row>
            <br/>
            <Row className="selfiM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:13}} xs={{span:24}} align="left"> 
                <div className="selfiH">Why Design a BSE app?</div>
                <br/>
                <div className="selfiHp">
                    Breast cancer is the most frequently diagnosed cancer and the leading cause of cancer-related death in females worldwide, accounting for 23% of all cases 
                    of cancer and 14% of total cancer deaths. Each year, a large number of women in the world are diagnosed with breast cancer, and the incidence of breast cancer has increased significantly in the past decade, making this cancer a common health problem among global women, particularly in rural areas.
                </div>
                <br/>
                <div className="selfiHp">
                <ul>
                <li>Over 300,000 people in the US is diagnosed with breast cancer, with an estimated 12,000 of those diagnosed expected to be under the age 
                of 40. Early detection is pivotal to ensuring a high likelihood of survival, which 
                is why the importance of self-check is the no 1 priority for both men and women .
                </li>
                <br/>
                 <li> According to Johns Hopkins Medicine, 40% of diagnosed breast cancers are detected by women who feel a lump. All adult women are encouraged to perform BSE( Breast Self- Examination) at least once a month. BSE is not a replacement to getting routine mammograms.</li>
                  <br/>
                  <li>
                        Breast Self-Examination (BSE) is a procedure by which women physically examine their own breasts in the privacy of their own homes. The goal of BSE 
                is to detect sub-surface lumps or changes which can be brought to the doctor’s attention and get advice on follow-on diagnostics such as mammogram. Since BSE is a manual, subjective procedure, many women are unsure how to perform a BSE, and unsure how to interpret what they feel. As a result, some women may be reluctant to perform BSEs, and the effectiveness of BSEs vary dramatically among those who perform them. Currently there are no digital health solutions or devices to guide or assist women to perform BSEs at home.
                 
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
            <Row className="selfiM" >
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                <h1 align="center" style={{fontFamily:'Shorelines Script Bold'}}>Needfinding  ?</h1>
                <div className="selfiHp" style={{textAlign:'center'}}>
                    To better understand the current scene of breast health awareness  and discover opportunities where an app 
                    might help. We interviewed a few doctors and patients at Bangalore Baptist Hospital who were using the SELFI 
                    device for trials, asking their views and feelings about mammography and how would they feel about making SELFI 
                    a household item for monthly breast checkups? 
                </div>
                <img style={{width:'100%', marginTop:'10px'}} src={selfiForm}/>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <Row className="selfiM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:13}} xs={{span:24}} align="left"> 
                <div className="selfiH">Key Learnings</div>
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
                <Col lg={{span:7}} xs={{span:24}} align="center"> 
                 <img style={{width:'85%', marginTop:'50px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/BA49E97B-0D0A-4F6F-B7E9-9DF87FB6B209.svg"/>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}> </Col>
            </Row>
            <br/>
            <Row className="selfiM" style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:20}} xs={{span:24}}>
                <Row>
                    <Col lg={{span:12}} xs={{span:24}} align="left">
                        <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/6C1C9051-C170-4771-852B-E017C7A2D2A8.svg"/>
                        <div style={{marginTop:'10px', marginBottom:'10px', color:'#ff6b63'}}>DEFINE/ SYNTHESIZE</div>
                        <div className="selfiH">What we gathered</div>
                        <br/>
                    </Col>
                    <Col lg={{span:12}} xs={{span:24}} align="right" className="showInDesktop" style={{marginTop:'20px'}}>
                    <h1 style={{fontFamily:'Shorelines Script Bold'}}>gather  +  devlop……</h1>
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
                        <div className="selfiHp" style={{fontSize:'23px', fontFamily:'Palatino-Roman'}}>
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
            <Row style={{backgroundColor:'#faf7f4', paddingTop:'35px'}}>
                             <Col span={10} align="left">
                                <img style={{width:'80%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/A6868F65-16C7-4EDC-9C5C-1DB2B5F0B648.svg"></img>
                             </Col>
                             <Col span={12}  align="left">
                                <img src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/78458AF2-232F-464A-B555-BBEF69D4FFDD.svg"/>
                                <div style={{marginTop:'10px', marginBottom:'15px', color:'#ff6b63'}}>DEFINE/ SYNTHESIZE</div>
                                 
                                <div className="selfiH">
                                What we planned
                                </div> 
                                <div className="selfiHp">
                                Drawing from our two important questions, we generated ideas for solutions. Some of these included the ability to send referral codes to your friend for discount, making a subscription model, getting notifications when your next appointments is or scheduling an appointment, having in app mental health counsellor, a breast cancer survivor community for sharing experience  and gamification of in-app actions. We bundled these ideas in various ways to get a feel for how the most promising ones could fit within an educate-and-motivate framework.
                                </div>
                             </Col>
                             <Col span={2}  align="left"></Col>
            </Row>
        </div>
    )
}