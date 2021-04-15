import './ProjectsContainer.css';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'antd';

const projects = [
    {
        id:1,
        title: 'Rapido’s Booking Experience',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F66D9C84-6C43-42BA-8290-A7408B4B96E5.svg',
        isPrivate: false,
        route:"/rapido"
    },
    {
        id:2,
        title: 'Breast- Self Examination App',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/64661C8F-13A9-4568-968A-CB4C384F8DE6.svg',
        isPrivate: true,
        route:"/selfi"
    },
    {
        id:3,
        title: 'Website Redesign ',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/9A679E98-267D-480B-8FDE-6D6D68931F6D.svg',
        isPrivate: false,
        route:"/aid"
    },
    {
        id:4,
        title: 'Meeting Room Platform',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/65B2DAD7-B40D-402F-BE1F-9D8AAF57EF77.png',
        isPrivate: true,
        route:"/ving"
    },
    {
        id:5,
        title: 'Event Website',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7BEEFA44-A402-441E-AD9E-466922704D0D.png',
        isPrivate: false,
        route:"/innaz"
    },
    {
        id:6,
        title: 'Branding + Illustrations',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/ABA3248F-A35C-4970-89B5-502FE9AC03C8.svg',
        isPrivate: null,
        route:"/branding_illustrations"
    },
]

export function ProjectCard(props){
    return (
        
        <div  
        align="center"
        id="projectCard"
        style={{  
            position:'relative', 
            marginBottom:'30px',  
            }}> 
            <img align="center" src={props.image} style={{width:'80%'}}/>
            <h2 align="left" style={{position:'absolute', top:'35px', left:'95px', marginBottom:'30px'}}>
             {props.title} 
             <br/> 
             
            <NavLink to={props.route} align="center" style={{fontSize:'18px',backgroundColor:'', opacity:'1', borderRadius:'5px', paddingTop:'0px', marginTop:'20px', textAlign:'left'}}>
                {props.isPrivate == null ? "View Projects" : props.isPrivate == true ? <h4>Enter Password <span style={{position:'relative', top:'3px', marginLeft:'10px'}}>
                    &#10141;
                </span></h4> : <h4>View Case Study <span style={{position:'relative', top:'3px', marginLeft:'10px'}}>
                    &#10141;
                </span></h4>}
                
            </NavLink>
             
            </h2>
            
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </div>
    )
}

export default function ProjectsContainer(){
    return (
        
        <div id="projectsContainer">
            <Row>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[0].image}
                    title={projects[0].title}
                    isPrivate={projects[0].isPrivate}
                    route={projects[0].route}
            />
                </Col>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[1].image}
                    title={projects[1].title}
                    isPrivate={projects[1].isPrivate}
                    route={projects[1].route}
            />
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[2].image}
                    title={projects[2].title}
                    isPrivate={projects[2].isPrivate}
                    route={projects[2].route}
            />
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[3].image}
                    title={projects[3].title}
                    isPrivate={projects[3].isPrivate}
                    route={projects[3].route}
            />
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[4].image}
                    title={projects[4].title}
                    isPrivate={projects[4].isPrivate}
                    route={projects[4].route}
            />
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <ProjectCard image={projects[5].image}
                    title={projects[5].title}
                    isPrivate={projects[5].isPrivate}
                    route={projects[5].route}
            />
                </Col>
            </Row>
             
            
              
        </div>
    )
} 