import {useEffect} from 'react';
import './AidPortfolio.css';
import {Row, Col} from 'antd'; 

import animation1 from './../../animation_screens/animation1.mp4';
import aidFinalProto from './../../animation_screens/aidFinalProto.mp4';

import aid1 from './../../assets/aid/aid1.png';
import aid2 from './../../assets/aid/aid2.png';
import aid3 from './../../assets/aid/aid3.png';
import ourIdeation1 from './../../assets/aid/ourIdeation1.png';
import ourIdeation2 from './../../assets/aid/ourIdeation2.png';
import ourIdeation3 from './../../assets/aid/ourIdeation3.png';
import ourIdeation4 from './../../assets/aid/ourIdeation4.png';
import wireframing1 from './../../assets/aid/wireframing1.png';
import wireframing2 from './../../assets/aid/wireframing2.png';

//const AidImg = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/6EBCF7C7-9F05-43F5-A8C3-CEAA95447141.png";
const AidLogo = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3C7BAF27-C0BA-473E-B852-57560A74049C.png";

export default function Aid(){

    useEffect(()=>{
      window.scrollTo(0, 0);
    }, [])

    return (
        <div align="center" id="aid">
            <h3 style={{fontFamily:'Raleway', color:'#796b6d'}}>
                Project Duration  -  Sept 2019- Feb 2020
            </h3>
            <div id="aidMainH" style={{fontFamily:'serif', color:'#796b6d', marginBottom:'80px', fontSize:'48px'}}>
            University Website Redesign 
            </div>
            <Row style={{marginBottom:'76px'}}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <video style={{width:'100%'}} loop="true" autoplay="autoplay" muted>
                        <source src={animation1} type="video/mp4"/>
                        video tag is not supported
                    </video> 
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row> 
            <Row className="aidM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:7}} xs={{span:24}}>
                    <img id="aidLogoI" style={{width:'169px', marginBottom:'34px'}} src={AidLogo}/>
                    <br/> 
                    <h4 style={{fontFamily:'Raleway', color:'#e00044'}}><b>AREA</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                        Visual Design, Website Branding

                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#e00044'}}><b>MY ROLE</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}> 
                        Lead the UI design through end to end process: branding and ideation through launch.
                    </p> 
                    <h4 style={{fontFamily:'Raleway', color:'#e00044'}}><b>TEAM</b></h4>
                    <p style={{fontFamily:'Raleway', fontSize:'17px', color: '#585757'}}>
                        Archana Das, Shailja Patel, Daiyaan Sayed
                    <br/>
                    <br/>
                    </p>
                </Col>
                <Col lg={{span:1}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:12}} xs={{span:24}}>
                    <h1 className="rapidoH">
                    Creating an experience through visual story telling.
                    </h1>
                    <p className="rapidoHp">
                    AID (Asian Institute of Design) is a higher education college based in Bangalore, India, offering multi-disciplinary degrees and diplomas in new age careers with a strong industry engagement and academic standards with emphasis on student-led learning.
                    <br/>
                    <br/>
                    I was part of AID’s ambitious project to redesign their website and set a new visual style, and brand hierarchy. A perfect opportunity for a relaunch. We incorporated their beautiful new typography, logo, and refined color palette into our web templates, so that AID could roll all of it out with a brand-new website.
                    </p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row style={{
                paddingTop:'84px',
                paddingBottom:'84px',
                background:"url('https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/4A5ADF3B-4C72-420D-8ADE-4773C08A66B8.svg')",
                backgroundSize:"cover",
                backgroundPosition: "center top",
                backgroundSize:"200vw"
            }}
                >
            <Col lg={{span:2}} xs={{span:24}}></Col>
            <Col lg={{span:12}} xs={{span:12}}>
                <img style={{width:'80%'}} src={aid1}/>
                <br/>
                <br/>
                <h3 style={{color:'#796b6d', fontFamily:'Raleway'}}>Desktop view</h3>
            </Col>
            <Col lg={{span:8}} xs={{span:12}}>
                <img style={{width:'52%'}} src={aid2}/>
                <br/>
                <h3 style={{color:'#796b6d', fontFamily:'Raleway'}}>Mobile view</h3>
            </Col>
            <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row className="aidM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <div className="aidH" style={{marginBottom:'45px'}}>Our Approach</div>
                    <p className="aidHp">
                    Our ideal goal was to create an interactive user friendly experience for the students applying to the institution who can feel the excitement of joining a Design School and be a part of the brand. Their old website however, didn’t reflect this dynamic. Aesthetically it was a information dumping ground which didn’t do justice to the brand or institution ideals. There was no structure to the content. It amplified confusion rather than coherency.
                    <br/>
                    <br/>
                    Our goals were to:
                    <br/>
                    <ul>
                        <li>Improve the brand structure and create a new brand language </li>
                        <li> Simplify the steps needed to find information & to reduce site confusion.</li>
                    </ul>
                    </p>
                    <br/>
                    <p align="left" style={{fontFamily:'serif', fontSize:'30px', color:'#585757'}}>
                    " Make it easy to understand the company value and facilitate a positive user
                    experience through informative and relevant content to navigate potential  
                    clients in the right direction."
                    </p>
                </Col> 
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col span={24}>
                    <img style={{width:'100%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F6CD5D3D-F0A6-48A1-A326-8EE45C6B5CFA.svg"/>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row style={{
                paddingTop:'117px',
                paddingLeft:'15px',
                paddingRight:'15px',
                paddingBottom:'60px',
                background:'url("https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/0B95BF7B-07F6-4F14-8AA1-CC8AD8419FAB.svg")',
                backgroundSize:'cover', 
                backgroundRepeat:'no-repeat'
                }}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <div align="left" style={{marginBottom:'30px'}} className="aidH">What We Planned</div>
                    <p className="aidHp">
                    We needed to create a system that could logically represent a wide breadth of content they started producing, including e.g. student work, scholarships, blogs, placements, etc. Also, to this it was important to come up with a modern and appealing visual style that will shine a light on the brand personality.
                    <br/>
                    <br/>
                    Since the environment that we were designing for comes from the institution of colours, shapes and form. Being a Design University, our inspirations were instantly shifted to Modular Graphics. As many of us move away from designing pages toward designing systems, one concept keeps cropping up: modularity. We often hear about the benefits of a modular approach; modules are scalable, replaceable, reusable, easy to test, quick to put together—“They’re just like LEGO!”
                    <br/>
                    <br/>
                    We drew our inspiration from Jonathan Barnbook’s  unique interpretation from modular design. Barnbrook developed the identity in a modular way allowing it to be arranged in many different sequences. The flexibility of the modular blocks meant that Barnbrook’s work could be used across different applications, from the cover of the catalogue to the website, posters, bags, T-shirts and other signage. Inspired by the work of Harry Smith, the primary layer of blocks use textual information, illustrations from scientific reference books and stills from Smith’s films, among other things. 
                    </p>
                    <br/>
                    <br/>
                    <h1 align="right" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868',width:'50%'}}>Our Inspiration</h1>
                    <img style={{width:'50%'}} src={aid3}/>
                    <p style={{textAlign:'center', marginTop:'20px'}} className="aidHp">Jonathan Barnbook’s eclectic ideation</p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row> 
            <Row style={{marginTop:'107px'}} className="aidM">
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:20}} xs={{span:24}}>
                    <div style={{fontSize:'30px', fontFamily:'serif', color:'#585757'}}>
                    “Design shapes the environment, changing the way we perceive things and informing our choices” - <i>Barnbrook</i>
                    </div>
                    <br/>
                    <br/>
                    <h1 align="left" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>our ideation</h1>
                    <Row>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <img style={{width:'90%'}} src={ourIdeation1}/>
                        </Col>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <img style={{width:'90%'}} src={ourIdeation2}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <img style={{width:'90%'}} src={ourIdeation3}/>
                        </Col>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <img style={{width:'90%'}} src={ourIdeation4}/>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <p style={{fontSize:'20px'}} className="aidHp">
                        I worked around the most common shapes and started placing them in different sequences to create a dynamic 
                        aesthetic for the brand.
                    </p>
                    <br/>
                    <br/>
                    <h1 align="right" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>more explorations</h1>
                    <br/> 
                    <Row>
                        <Col xs={{span:24}} lg={{span:12}}>
                            <img style={{width:'80%', marginTop:'-25px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/A7D04486-D8D0-4DF1-A1BE-57B8A56E270E.svg"/>
                            <br/>
                            <br/>
                        </Col>
                        <Col xs={{span:24}} lg={{span:12}} align="left">
                            <div>
                            <img style={{width:'80%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/A821A58B-4E3E-4508-BDDB-AF2FBA816889.png"/>
                            <br/> 
                            </div>
                            <br/> 
                            <div className="aidHp" style={{width:'100%'}}>
                            I further explored a few more ideations of the same shapes and created a few more iterations drawing inspiration from Art Deco architecture and gave the shapes a little more personality.
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <img style={{width:'68%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7F9C991C-1A5F-462C-AA24-03C64CFFA023.svg"/>
                        </Col>
                        <Col xs={{span:12}} lg={{span:12}}>
                            <br/>
                            <br/>
                            <img style={{width:'80%'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/3E88C675-7F0B-49F1-8B82-19D0CEBAEF28.svg"/>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <h1 align="left" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868',marginBottom:'19px'}}>wireframing</h1> 
                    <p className="aidHp">
                    Finally, once all of the planning and foundation was built, we were ready to play with wireframes for the core desktop experience. Once you know WHY and WHAT we are doing in the written form constructing pages is a piece of cake. Of course, we went through circles of feedback, but it was pretty easy to move things around without involving design ego for graphics.
                    <br/>
                    <br/>
                    The main point: each page needs to convey the goal and present main user questions and concerns. This information needs to be structured logically to allow users to scan the page quickly. Content always comes first, once you know what the page needs to achieve you can then focus on elements and graphical composition.
                    </p>
                    <br/>
                    <br/>
                    <Row>
                        <Col xs={{span:24}} lg={{span:12}}>
                            <img style={{width:'69%'}} src={wireframing1}/>
                        </Col>
                        <Col className="showOnDesktop" xs={{span:0}} lg={{span:12}}> 
                            <img style={{width:'62%'}} src={wireframing2}/>
                        </Col>
                    </Row>
                    <br/>
                    <p style={{textAlign:'center'}} className="aidHp">
                    Quick options in hi-fidelity wireframes to match stakeholders’ expectations better
                    </p>
                    <br/>
                    <br/>
                    <h1 align="left" style={{fontFamily:'Shorelines Script Bold', color:'#6a6868'}}>our final prototype</h1>
                    <br/> 
                    <p className="aidHp">
                    Once logic and functionality are defined, the visual design process doesn’t take long, and turns into an enjoyable meditation on aesthetic and design quality. Using wireframes and the modular design system, the UI was created, following brand visual guidelines.
                    </p>
                    <br/>
                    <br/>
                    <video style={{width:'100%'}} autoplay="autoplay" loop="true" muted>
                        <source src={aidFinalProto} type="video/mp4"/>
                        video tag is not supported
                    </video>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
            <br/>
            <br/>
            <Row style={{backgroundColor:'#f1f1f1', padding:'15px', paddingTop:'60px', paddingBottom:'60px', marginBottom:'-50px'}}>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col align="left" lg={{span:6}} xs={{span:24}}>
                    <p style={{fontFamily:'Raleway'}}>UPDATE</p>
                    <div className="aidH">
                    Currently the AIDwebsite is live
                    </div>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
                <Col lg={{span:12}} xs={{span:24}}>
                    <p className="aidHp">                        
                        I had a fun time creating the  visual experience for AID’s new website and getting a chance to unleash my creativity because it reminded me of my design school days where we had the freedom to create and explore with
                        bare minimum resources. 
                        <br/>
                        <br/>
                        As for the new design. We have not rolled out the updated experience of enough users to gather statistical significance to validate the success of 
                        the new design. However, we're continuing to get some positive feedback
                        <br/>
                        <br/>
                        <span style={{color:'#15204e' }}><b>Increase</b> in site views and admissions</span>
                        <br/>
                        <span style={{color:'#15204e' }}><b  style={{color:'#15204e' }}>Improved</b> user experience and architecture</span>
                        <br/>
                        <span style={{color:'#15204e' }}><b  style={{color:'#15204e' }}>Decrease</b> in site confusion</span>
                        <br/>
                        <br/>
                        <br/>
                        Check out: <a target="_aidDesign" href="https://asianinstituteofdesign.in/">https://asianinstituteofdesign.in/</a>
                    </p>
                </Col>
                <Col lg={{span:2}} xs={{span:24}}></Col>
            </Row>
        </div>
    )
    }